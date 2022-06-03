import { ITranslation, Language } from "../providers/context";

export function getTranslations(translation: ITranslation) {
  return (language?: Language) => {
    return (slug: string) => {
      const obj: any = translation[language || Language.English];
      if (obj && obj[slug]) return obj[slug];

      return slug;
    };
  };
}
