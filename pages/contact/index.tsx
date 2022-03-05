import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <h3 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h3>
      <p className={"description"}>
        Get started by editing{" "}
        <code className={"code"}>pages/contact/contact.js</code>
      </p>
    </MainLayout>
  );
}
