export type Answers = {
  subscription?: 'yes' | 'no';
  gift?: 'yes' | 'no';
  flexibleAmount?: 'yes' | 'no';
  freeShipping?: 'yes' | 'no';
  points?: 'yes' | 'no';
};

export type AnswerKey = keyof Answers;
