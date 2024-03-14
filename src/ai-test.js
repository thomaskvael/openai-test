import {openai} from './config/openai';

export const testOpenAi = async () => {
  console.log('TRIGGER testOpenAi')
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  //console.log(completion.choices[0]);
  return completion.choices[0].message.content;
}