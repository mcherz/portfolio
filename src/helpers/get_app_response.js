
/* eslint max-len: */  // --> OFF
import React from "react" //eslint-disable-line
import ElizaBot from "elizabot"
import bowser from "bowser"

import { setModalOpen } from "actions/speech_actions"

const getAppResponse = (inputString, state, dispatch) => {
  const magic = {
    resume: {
      jsx: <span>I should probably update my resume. For now, here's my <a href="https://www.linkedin.com/in/matt-herz" target="_blank" rel="noreferrer noopener">LinkedIn Profile</a>.</span>,
      plainText: "I should probably update my resume. For now, here's my LinkedIn Profile."
    },
    linkedin: {
      jsx: <span>How about a link to my <a href="https://www.linkedin.com/in/matt-herz" target="_blank" rel="noreferrer noopener">LinkedIn Profile</a>?</span>,
      plainText: "How about a link to my LinkedIn Profile?"
    },
    twitter: {
      jsx: <span>So much for professionalism: <a href="https://www.twitter.com/mattiherz" target="_blank" rel="noreferrer noopener">@mattiherz</a>.</span>,
      plainText: "So much for professionalism: at matty herz."
    },
    email: {
      jsx: <span>I'd throw in a mailto: link, but those are terrible. Copy-paste mcherz@gmail.com and have at it.</span>,
      plainText: "It's m c h e r z at g mail dot com. Good luck copy pasting that."
    },
    phone: {
      jsx: <span>I'm honestly a little gunshy about putting my cell phone number where internet weirdos can find it. Try email?</span>,
      plainText: "How does that song go? Eight six seven five three oh nine? No, wait, that's Jenny, not me."
    },

    alexa: {
      jsx: <span>Alexa, order six tons of chipped beef. Alexa, confirm purchase.</span>,
      plainText: "Alexa, order six tons of chipped beef. Alexa, confirm purchase."
    },
    cortana: {
      jsx: <span>Cortana, Cortana, Cortana. I feel like I should recognize that name.</span>,
      plainText: "Cortana, Cortana, Cortana. I feel like I should recognize that name."
    },
    google: {
      jsx: <span>Ok, Google. Play Drive by the Cars.</span>,
      plainText: "Ok, Google. Play Drive by the Cars."
    },
    siri: {
      jsx: <span>Hey, Siri. How many developer years has Apple spent on you to date?</span>,
      plainText: "Hey, Siri. How many developer years has Apple spent on you to date?"
    },

    eliza: {
      jsx: <span>Come now. If you could plug an open source chatbot in for free, you wouldn't write one either.</span>,
      plainText: "Come now. If you could plug an open source chatbot in for free, you wouldn't write one either."
    },
    open_source: {
      jsx: <span>Sure, take a look. It's at <a href="https://github.com/mcherz/portfolio" target="_blank" rel="noreferrer noopener">https://github.com/mcherz/portfolio</a>.</span>,
      plainText: "Sure, take a look. It's at github dot com slash m c h e r z slash portfolio."
    },

    use_speech: {
      jsx: <span>It turns out there's an even more fun <a onClick={() => {dispatch(setModalOpen(true))}} >way to do this</a>...</span>,
      plainText: "It turns out there's an even more fun way to do this..."
    },
    prompt_magic: {
      jsx: <span>If you're annoyed with Eliza's responses, you can ask me for contact info (or go looking for Easter eggs...)</span>,
      plainText: "If you're annoyed with Eliza's responses, you can ask me for contact info (or go looking for Easter eggs...)"
    },
    easter_eggs: {
      jsx: <span>I can't just TELL you what they all are; that wouldn't be fun. (But the 'Alexa' one is probably my favorite.)</span>,
      plainText: "I can't just TELL you what they all are; that wouldn't be fun. (But the 'Alexa' one is probably my favorite)."
    }
  }

  const promptSpeech = state.response.responseCount === 2 && !state.speech.speechRecActive && bowser.name === "Chrome" && bowser.osname !== "ios"
  const lowString = inputString.toLowerCase()
  switch (true) {
    case promptSpeech:
      return magic.use_speech
    case state.response.responseCount === 12:
      return magic.prompt_magic
    case lowString.match("resume") !== null:
      return magic.resume
    case lowString.match("linkedin") !== null:
      return magic.linkedin
    case lowString.match("twitter") !== null:
      return magic.twitter
    case lowString.match("alexa") !== null:
      return magic.alexa
    case lowString.match("cortana") !== null:
      return magic.cortana
    case lowString.match("google") !== null:
      return magic.google
    case lowString.match("siri") !== null:
      return magic.siri
    case lowString.match("eliza") !== null:
      return magic.eliza
    case lowString.match("open source") !== null:
    case lowString.match("source code") !== null:
      return magic.open_source
    case lowString.match("email") !== null:
    case lowString.match("contact") !== null:
      return magic.email
    case lowString.match("phone") !== null:
      return magic.phone
    case lowString.match("easter egg") !== null:
      return magic.easter_eggs
    default: {
      const eliza = new ElizaBot()
      const returnString = eliza.transform(inputString)
      return {
        jsx: <span>{returnString}</span>,
        plainText: returnString
      }
    }
  }
}

export default getAppResponse
