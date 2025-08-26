import React from "react";
import { Badge } from "../ui/badge";
import { Sparkles } from "lucide-react";

export default function SmallTitle({ title }: { title: string }) {
  return (
    <Badge
      variant="outline"
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white/80 border-gray-200 text-gray-700 hover:bg-white/90 transition-colors"
    >
      <Sparkles className="w-4 h-4 text-orange-500" />
      {title}
    </Badge>
  );
}
