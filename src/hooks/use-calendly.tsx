

export const useCalendly = () => {
    
    const openCalendly = (url: string) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any)?.Calendly?.initPopupWidget({url: url});
    }
  return {
    openCalendly
  };
}
