import OpenAI from "openai";
import { GPT_API_KEY } from "./constants";

const openai = new OpenAI({
    dangerouslyAllowBrowser: true,
    apiKey:  {GPT_API_KEY},
});

export default openai;
