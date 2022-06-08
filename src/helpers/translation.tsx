export type ITranslationFunc = (slug: string) => string;

export const withTranslations =
  (translation: any) => (WrappedComponent: any) => {
    var DecoratedComponent = ({ language, ...other }: any) => {
      const t = getTranslations(translation)(language);
      return <WrappedComponent {...{ t, language, ...other }} />;
    };
    return DecoratedComponent;
  };

export function getTranslations(translation: any) {
  return (language: string) => {
    return (slug: string) => {
      const obj: any = translation[language];
      if (obj && obj[slug]) return obj[slug];

      return slug;
    };
  };
}
