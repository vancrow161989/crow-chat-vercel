export type OpenRouterErrorResponse = {
  error: {
    message: string;
  };
};

export type OpenRouterResponse = {
  id: string | null;
  choices: {
    message: {
      role: string;
      content: string;
    };
  }[];
};
