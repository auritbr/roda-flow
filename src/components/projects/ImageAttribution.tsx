import { Copyright } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function ImageAttribution({ author, license, url }: { author: string; license: string; url: string }) {
  return <Dialog><DialogTrigger asChild><Button variant="ghost" size="icon" aria-label="Créditos da imagem" title="Créditos da imagem" className="absolute bottom-2 left-2 bg-card/90 text-foreground"><Copyright aria-hidden="true" /></Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Créditos da imagem</DialogTitle><DialogDescription>Atribuição da fotografia utilizada sob licença Creative Commons.</DialogDescription></DialogHeader><p className="text-sm">{author} · {license}</p><a className="text-sm underline underline-offset-4" href={url} target="_blank" rel="noreferrer">Fotografia original e licença</a></DialogContent></Dialog>;
}