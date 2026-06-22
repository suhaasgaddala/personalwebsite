import { redirect } from "next/navigation";
import { socials } from "@/data/socials";

export default function WritingsPage() {
  redirect(socials.substack);
}
