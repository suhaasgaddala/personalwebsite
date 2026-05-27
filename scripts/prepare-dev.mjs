import { execFileSync } from "node:child_process";
import { rmSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();

function run(command, args) {
  try {
    execFileSync(command, args, { stdio: "pipe" });
  } catch {
    // Stale dev cleanup is best effort; Next will surface any real startup errors.
  }
}

if (process.platform === "win32") {
  const escapedRoot = root.replaceAll("'", "''");
  const script = `
$root = '${escapedRoot}'
Get-CimInstance Win32_Process |
  Where-Object {
    $command = $_.CommandLine
    $_.CommandLine -like "*$root*" -and
    $_.CommandLine -like "*node*" -and
    (
      $command -match "next.*dev" -or
      $command -match "next[\\\\/]+dist[\\\\/]+server"
    )
  } |
  ForEach-Object {
    Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue
  }
`;
  run("powershell.exe", ["-NoProfile", "-ExecutionPolicy", "Bypass", "-Command", script]);
} else {
  run("sh", [
    "-c",
    `ps -eo pid=,args= | grep '${root.replaceAll("'", "'\\''")}' | grep -E 'next.*dev|next/dist/server' | grep -v grep | awk '{print $1}' | xargs -r kill -9`
  ]);
}

rmSync(resolve(root, ".next"), { recursive: true, force: true });
rmSync(resolve(root, ".next-dev"), { recursive: true, force: true });
