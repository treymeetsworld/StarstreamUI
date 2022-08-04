
export interface IFAQs {
  id: number | undefined | " ";
  title: string | undefined | " ";
  faqs: string | undefined;
}

export class FAQs {
  userId?: number | undefined | string | " ";
  title?: string | undefined;
  id?: number | undefined | string | " ";
  question_text?: string | undefined | " ";
  answer_text?: string | undefined | " ";

  getId() {
    return this.id;
  }
  getQuestions() {
    return this.question_text;
  }
  getAnswers() {
    return this.answer_text;
  }
}

export interface IMoreFAQs {
  faq_id: number | undefined;
  faq_question: string | undefined;
  faq_answer: string | undefined;
}
