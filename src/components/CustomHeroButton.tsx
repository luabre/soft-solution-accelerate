
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CustomHeroButton = () => {
  return (
    <Button variant="cta" className="group px-6 py-6 text-lg">
      <span className="relative flex items-center gap-2">
        Esqueça o comum. Veja o que é possível
        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
      </span>
    </Button>
  );
};

export default CustomHeroButton;
