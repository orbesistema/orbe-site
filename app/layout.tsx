import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ORBE | Gestão empresarial em um só lugar",
  description: "Financeiro, vendas, estoque, clientes e operação conectados. Tudo gira em torno do seu negócio."
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="pt-BR"><body>{children}</body></html>
}
