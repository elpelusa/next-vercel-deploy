import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
      <h3 className={"title"}>Estas en Inicio</h3>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/index.js</code>
      </p>
    </MainLayout>
  );
}