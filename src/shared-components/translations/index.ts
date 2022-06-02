import { Language } from "../../providers/context";

export default function getTranslations(translation: any) {
  return (language: Language | null) => {
    return (slug: string) => {
      const obj: any = translation[language || "en"];
      if (obj && obj[slug]) return obj[slug];

      return slug;
    };
  };
}
