export interface Quote {
  text: string;
  author?: string;
  fontSize: number;
  fontFamily: string;
  textColor: string;
  textAlign: 'left' | 'center' | 'right';
  backgroundColor: string;
  backgroundImage?: string;
  textOpacity: number;
  dimensions: {
    width: number;
    height: number;
  };
}

export interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  user: {
    name: string;
  };
}

export interface SocialPreset {
  name: string;
  width: number;
  height: number;
  label: string;
}