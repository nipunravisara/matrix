export function getFontWeight(fontWeight: number): string {
  switch (fontWeight) {
    case 700:
      return 'Bold';
    case 600:
      return 'SemiBold';
    case 500:
      return 'Medium';
    case 300:
      return 'Light';
    default:
      return 'Regular';
  }
}
