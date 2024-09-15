interface KakaoStatic {
  init: (apiKey: string) => void;
  isInitialized: () => boolean;
  Link: {
    sendDefault: (options: any) => void;
  };
}

interface Window {
  Kakao: KakaoStatic;
}
