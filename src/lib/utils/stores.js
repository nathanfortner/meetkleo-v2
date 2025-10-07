import {writable} from 'svelte/store';
import {readable} from 'svelte/store';

export let valueLang = writable('Fluent');

export let members = readable([
        {
            'name': 'Michiyo Kawasaki',
            'title': 'CEO',
            'photo': 'MichiyoKawasaki.png',
            'bio': `Raised in a biracial and bilingual household, I have experienced the connection and also the separation that language can bring. I was inspired by my father's ongoing struggles to improve his English and the impact this had on our family. Driven to create a powerful solution to unleash the joy of succeeding and connecting through language.`
        },
        {
            'name': 'Michael Bachuri',
            'title': 'CTO',
            'photo': 'MichaelBachuri.png',
            'bio': `As a first-generation American, the language barrier always served as an obstacle to developing relationships with my loved ones. This now fuels my motivation to help solve this problem by using my passion for emerging and mobile technologies.`
        },
        {
            'name': 'Luke Weidner',
            'title': 'President of Engineering',
            'photo': 'LukeWeidner.png',
            'bio': `With a grandmother who moved from Germany to America at the age of 16, I know how much more of a connection people can have when speaking to each other in a shared language. I'm so excited to share this gift of language with everyone through the Kleo experience.`
        }
]);

export let listOfTestimonialsData = readable([
    {
        name: "Feli",
        title: `"Feli from Germany" channel`,
        profile_image: "feli.jpg",
        feedback:
        "I was skeptical at first. But then I was blown away! I was speaking Spanish to a woman and was invited into her home - all while sitting in a coffee shop. Kleo lets you practice in everyday situations without ever leaving the country. This will boost your speaking confidence immensely!",
    },
    {
        name: "Peter",
        title: "co-author of National German Exam and teacher with 30 years of experience",
        profile_image: "peter.jpg",
        feedback: `It's as close as you can get to having a teacher in the classroom giving you feedback.`,
    },
    {
        name: "Jessie",
        title: "mom and entrepreneur",
        profile_image: "jessie.jpg",
        feedback:
        "Love, love, love the interactive element of immediate feedback and practicing like you're with a live coach . . . or a live friend.",
    },
    {
        name: "Shelly",
        title: "long-time Duolingo user",
        profile_image: "shelly.jpg",
        feedback:
        `I've been doing Duolingo for 4 years and I've liked it a lot, so, honestly, I was skeptical of another language app. However, I prefer Kleo's format - I like interacting with real people, and it seems to get to the heart of what's important to know.`,
    },
    {
        name: "Kali",
        title: "language app subscriber",
        profile_image: "kali.jpg",
        feedback: "I like the interaction much more than Babbel and Rosetta Stone. Very engaging. Love love!!",
    },
  ]);

export let faqs = readable([
    {
        'question': `How much does Kleo cost?`,
        'answer': `Each language has several free lessons. A subscription unlocks the full course in all languages, along with personalized lessons. We have various subscription plan options: $4.99/Week; $9.99/Month; $29.99/6-Months. Prices are shown here in USD. You can cancel anytime. (Note that the Ukrainian mini-course is completely free and does not require a subscription)`
    },
    {
        'question': 'Will my subscription auto-renew?',
        'answer': `Yes, Apple will auto-renew your Kleo subscription until it is canceled. You can cancel anytime. Upon cancellation, you will have access to Kleo through the remainder of your subscription term`
    },
    {
        'question': 'How can I change my subscription?',
        'answer': `You can change your Kleo subscription anytime. On your iPhone: Open the Settings app > Tap your name at the top > Tap Subscriptions > Tap Kleo > Tap See All Plans > Select your new option. For any assistance with plan changes, please email us at <a href="mailto:support@meetkleo.com" class="text-blue-600">support@meetkleo.com</a>`
    },
    {
        'question': 'How can I cancel my subscription?',
        'answer': `You can cancel your Kleo subscription anytime. On your iPhone: Open the Settings app > Tap your name at the top > Tap Subscriptions > Tap Kleo > Tap Cancel Subscription. For more details, see <a href="https://support.apple.com/en-us/HT202039" class="text-blue-600">Apple Support</a>. Upon cancellation, you will have access to Kleo through the remainder of your subscription term. For any assistance with cancellation, please email us at <a href="mailto:support@meetkleo.com" class="text-blue-600">support@meetkleo.com</a>`
    },
     {
        'question': 'What do I do if Kleo is not recognizing my subscription?',
        'answer': `First, make sure you are attempting to login with the account that has the active subscription (email address vs. Apple vs. Google). Once that is confirmed, tap "Restore Purchases" at the bottom of the subscription plan page in the app. Or email us for help at <a href="mailto:support@meetkleo.com" class="text-blue-600">support@meetkleo.com</a>`
    },
    {
        'question': 'How can I get help with an account issue?',
        'answer': `You can Report a bug in your Kleo Settings. Or email us at <a href="mailto:support@meetkleo.com" class="text-blue-600">support@meetkleo.com</a>. We read and respond to every email we receive - generally within 24 hours. If you have not received a reply, please check your Junk or Spam folders`
    },
    {
      'question': 'How do I enable hands-free mode?',
      'answer': `
        <p>Hands-free mode can be enjoyed in any interactive video lesson component. The optimal usage is in the Practice Arena, where drill lessons auto-play in succession, with no navigation required. To activate hands-free mode, follow these steps:</p>
        <ol>        
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1) Pause the video to access Settings for the video</li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2) Tap Settings icon on bottom of video screen</li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3) Tap “Hands-free” toggle to activate hands-free mode</li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4) Tap “DONE” button to resume learning</li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5) To exit hands-free mode – press and hold lock button in center of video screen</li>
        </ol>
      `
    },
    {
        'question': 'How do I know if Kleo is right for me?',
        'answer': `Kleo's focus on speaking and active production provides a valuable tool for learners at many different levels. You can start as a complete beginner and find everything you need to progress up to the B-1 level. Or you can sharpen your existing skills and knowledge by flexing your speaking muscles. Our 1-Week plan is a great way to start your experience`
    },
    {
        'question': 'How advanced can I get with the Kleo content?',
        'answer': `Our content currently extends up to the B1-level, covering basic conversational skills in past, present, and future tenses. Kleo's focus on speaking and active production provides a valuable practice tool for learners at many different levels. More advanced content is planned`
    },
    {
        'question': 'Can I try more than one language?',
        'answer': `Yes! Everyone can complete the free lessons across all languages. Subscribers can access all content across all languages. To return to the language selection screens, tap on the four boxes in the top left corner of the Learn page`
    },
    {
        'question': 'What if Kleo did not recognize my speech?',
        'answer': `We can look into this for you. In the video lessons, you can click on the "Explore it" button and then "Flag an issue" (speech). To report a speech recognition issue in the Vocabulary lessons, email us at <a href="mailto:support@meetkleo.com" class="text-blue-600">support@meetkleo.com</a>`
    },
    {
        'question': 'Will Kleo be adding new languages?',
        'answer': `We have a list of languages we hope to add as we grow. If there is a language you would like to learn through the Kleo concept, please "Request a feature" in your Kleo settings. Or email us at <a href="mailto:support@meetkleo.com" class="text-blue-600">support@meetkleo.com</a>`
    },
    {
        'question': 'How do I submit a feature request?',
        'answer': `We love feature requests and hearing from you. We are constantly working to provide the best possible learning experience. Please "Request a feature" in your Kleo settings. Or email us at <a href="mailto:support@meetkleo.com" class="text-blue-600">support@meetkleo.com</a>`
    },
    {
      'question': 'I have a question about accessibility. What do I do?',
      'answer': `Please send us a message at <a href="mailto:support@meetkleo.com" class="text-blue-600">support@meetkleo.com</a>. We would love to hear from you. We have released an app update with accessibility improvements to the interactive video player experience. We would love to have your feedback`
    },
    {
        'question': 'Will Kleo be released for Android?',
        'answer': `The Android is in development. We completed the initial beta and are pushing toward 1.0 release. Stay tuned!`
    },
    {
      'question': 'Can I use Kleo on my iPad?',
      'answer': `The following iPads support the Kleo program: iPad (6th generation) or later; iPad Air (3rd generation) or later; iPad mini (5th generation); iPad Pro (10.5 inch); iPad Pro (11 inch); iPad Pro 12.9-inch (2nd generation) or later. Optimization is still underway for the iPad, but you will be able to use all features, including the interactive video lessons`
  },
    {
      'question': 'What data does Kleo collect?',
      'answer': 'Kleo uses data on your speech attempts and performance, in order to create personalized lessons and keep track of your words and progression. No location-based data is collected and your personal information is never associated with any speech data.'
    },
    {
      'question': 'Does Kleo share my data?',
      'answer': `Kleo does not share any of your data`
    },
    {
      'question': `I emailed you. Why have I not heard back?`,
      'answer': `We read and respond to every email we receive - generally within 24 hours. If you have not received a reply, please check your Junk or Spam folders. If you still do not see a response, email <a href="mailto:michiyo.kawasaki@meetkleo.com" class="text-blue-600">michiyo.kawasaki@meetkleo.com</>`
    }
]);

export let newsitems = readable([
  {
    "id": 1,
    "attributes": {
      "newstitle": "Expressing wants",
      "newsdate": "2022-07-07",
      "newsdescription": "Modal verb wollen; Ich hätte gerne",
      "createdAt": "2022-08-07T23:59:18.031Z",
      "updatedAt": "2022-08-07T23:59:18.031Z",
      "publishedAt": "2022-08-07T23:59:18.029Z"
    }
  },
  {
    "id": 2,
    "attributes": {
      "newstitle": "Speaking in general terms",
      "newsdate": "2022-07-28",
      "newsdescription": "Indefinite pronouns for people & things",
      "createdAt": "2022-08-08T00:07:09.161Z",
      "updatedAt": "2022-08-08T00:07:09.161Z",
      "publishedAt": "2022-08-08T00:07:09.159Z"
    }
  },
  {
    "id": 3,
    "attributes": {
      "newstitle": "Speaking about the past",
      "newsdate": "2022-07-21",
      "newsdescription": "Narrative past",
      "createdAt": "2022-08-08T00:23:34.128Z",
      "updatedAt": "2022-08-08T00:23:34.128Z",
      "publishedAt": "2022-08-08T00:23:34.127Z"
    }
  },
  {
    "id": 5,
    "attributes": {
      "newstitle": "Describing your world",
      "newsdate": "2022-08-04",
      "newsdescription": "Quantifying & comparing",
      "createdAt": "2022-08-08T00:24:48.669Z",
      "updatedAt": "2022-08-08T00:24:48.669Z",
      "publishedAt": "2022-08-08T00:24:48.668Z"
    }
  },
  {
    "id": 6,
    "attributes": {
      "newstitle": "Describing your world",
      "newsdate": "2022-08-11",
      "newsdescription": "Saying that something is the most-whatever of all",
      "createdAt": "2022-08-08T00:25:02.395Z",
      "updatedAt": "2022-08-08T00:25:02.395Z",
      "publishedAt": "2022-08-08T00:25:02.392Z"
    }
  },
  {
    "id": 4,
    "attributes": {
      "newstitle": "Sentence elements & word order (1)",
      "newsdate": "2022-08-18",
      "newsdescription": "Starting sentences with time/manner/place (TMP) element; using multiple elements",
      "createdAt": "2022-08-08T00:24:34.640Z",
      "updatedAt": "2022-08-08T00:24:34.640Z",
      "publishedAt": "2022-08-08T00:24:34.639Z"
    }
  },
  {
    "id": 7,
    "attributes": {
      "newstitle": "Sentence elements & word order (2)",
      "newsdate": "2022-08-25",
      "newsdescription": "Combining the prior week's skills in a single sentence",
      "createdAt": "2022-08-08T00:25:14.550Z",
      "updatedAt": "2022-08-08T00:25:14.550Z",
      "publishedAt": "2022-08-08T00:25:14.548Z"
    }
  },
  {
    "id": 8,
    "attributes": {
      "newstitle": "Building more complex sentences (1)",
      "newsdate": "2022-09-01T22:25:31.203Z",
      "newsdescription": "Conjunctions: Coordinating and subordinating",
      "createdAt": "2022-08-08T00:25:31.203Z",
      "updatedAt": "2022-08-08T00:25:31.203Z",
      "publishedAt": "2022-08-08T00:25:31.202Z"
    }
  },
  {
    "id": 9,
    "attributes": {
      "newstitle": "Building more complex sentences (2)",
      "newsdate": "2022-09-08",
      "newsdescription": "Accusative prepositions",
      "createdAt": "2022-08-08T00:25:47.143Z",
      "updatedAt": "2022-08-08T00:25:47.143Z",
      "publishedAt": "2022-08-08T00:25:47.141Z"
    }
  },
  {
    "id": 10,
    "attributes": {
      "newstitle": "Building more complex sentences (3)",
      "newsdate": "2022-09-15",
      "newsdescription": "Dative prepositions",
      "createdAt": "2022-08-08T00:25:59.254Z",
      "updatedAt": "2022-08-08T00:25:59.254Z",
      "publishedAt": "2022-08-08T00:25:59.252Z"
    }
  },
  {
    "id": 11,
    "attributes": {
      "newstitle": "Building more complex sentences (4)",
      "newsdate": "2022-09-22",
      "newsdescription": "Two-way prepositions",
      "createdAt": "2022-08-08T00:26:12.945Z",
      "updatedAt": "2022-08-08T00:26:12.945Z",
      "publishedAt": "2022-08-08T00:26:12.944Z"
    }
  },
  {
    "id": 12,
    "attributes": {
      "newstitle": "Refining our endings (ein words)",
      "newsdate": "2022-09-29",
      "newsdescription": "Possessive determiners & kein forms",
      "createdAt": "2022-08-08T00:26:26.662Z",
      "updatedAt": "2022-08-08T00:26:26.662Z",
      "publishedAt": "2022-08-08T00:26:26.660Z"
    }
  }

      ]);

export let andreaOffer = readable([
  {
    aoImage: 'https://ddseu0ssi.mo.cloudinary.net/images/other/Web/Andrea/andrea_1.png?tx=h_200,w_150',
    aoAlt: `Andrea with glass of wine, cheers`,
    aoText: [
      `Discover Italian culture and traditions`,
      `How to shine at your next Italian meal`,
      `How to start and end conversations in Italian`
    ]
  },
  {
    aoImage: 'https://ddseu0ssi.mo.cloudinary.net/images/other/Web/Andrea/andrea_2.png?tx=h_200,w_150',
    aoAlt: `Sophia and Nonna offering food`,
    aoText: [
     `Get speaking in real-life situations`,
     `Learn with my friends in 15 free interactive video lessons`,
     `Learn to express yourself`
     ]
  },
  {
    aoImage: 'https://ddseu0ssi.mo.cloudinary.net/images/other/Web/Andrea/andrea_3.png?tx=h_200,w_150',
    aoAlt: `Lucia in greeting people`,
    aoText: [
     `Learn important skills you'll need in everyday situations`,
     `4 must-know greetings`,
     `3 ways to introduce yourself`
     ]
  },
  {
    aoImage: 'https://ddseu0ssi.mo.cloudinary.net/images/other/Web/Andrea/andrea_4.png?tx=h_200,w_150',
    aoAlt: `Good morning vocab, buongiorno`,
    aoText: [
     `Make it stick with AI-fueled practice`,
     `4 games to learn important vocab basics`,
     `5 drills to practice speaking on your feet`
     ]
  }
]);

export let contents = readable(
    [ 
      {
        "lessonNumber": 53.1,
        "lessonID": "ca4af2d1-75a0-4ecb-ba92-54ae7d6bef78",
        "lessonType": "Concept",
        "lessonTitle": "Pronounce Vowel Combos EI and EI",
        "lessonSetStart": "",
        "lessonSetEnd": "",
        "lessonDescription":"Check out the world's first interactive video pronunciation series",
        "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_de/lesson/tile/ca4af2d1-75a0-4ecb-ba92-54ae7d6bef78_0.jpg",
        "lessonLink": "https://meetkleo.page.link/vqpBxxXTzDLrK8MJ7",
        "lessonLock": "free",
        "lessonLanguage": "German",
        "lessonTag": "pronunciation",
        "newrelease": "yes"
      },
      {
        "lessonNumber": 60.1,
        "lessonID": "8d1452e6-86cc-4b49-a900-f3f9d175d240",
        "lessonType": "Concept",
        "lessonTitle": "Pronounce the Word Euro",
        "lessonSetStart": "",
        "lessonSetEnd": "",
        "lessonDescription": "Fan favorite. By popular request, conquer the sounds needed to master this important word",
        "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_de/lesson/tile/8d1452e6-86cc-4b49-a900-f3f9d175d240_0.jpg",
        "lessonLink": "https://meetkleo.page.link/fRaeUViwK1vqMbwx6",
        "lessonLock": "free",
        "lessonLanguage": "German",
        "lessonTag": "pronunciation",
        "newrelease": "yes"
      },
      {
        "lessonNumber": 34.1,
        "lessonID": "2bedcc3a-8b1c-419b-9a92-f943318d1c90",
        "lessonType": "Deep Dive",
        "lessonTitle": "Love And Romance",
        "lessonSetStart": "",
        "lessonSetEnd": "",
        "lessonDescription": "Feli from Germany shows how to spread the love on Valentine's Day or any day of the year",
        "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_de/lesson/tile/2bedcc3a-8b1c-419b-9a92-f943318d1c90_0.1",
        "lessonLink": "https://meetkleo.page.link/PB7sEVxCccfVdmKh9",
        "lessonLock": "free",
        "lessonLanguage": "German",
        "lessonTag": "funtopics"
      },
      {
        "lessonNumber": 1.11,
        "lessonID": "f2e5808d-474e-4011-85bd-6137e3ce7676",
        "lessonType": "Deep Dive",
        "lessonTitle": "Greet People",
        "lessonSetStart": "",
        "lessonSetEnd": "",
        "lessonDescription": "Use the right greeting no matter the time of day",
        "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_de/lesson/tile/f2e5808d-474e-4011-85bd-6137e3ce7676_0.jpg",
        "lessonLink": "https://meetkleo.page.link/H7js7VTMia2b5DrN7",
        "lessonLock": "free",
        "lessonLanguage": "German",
        "lessonTag": "course",
        "newrelease": "yes"
      },
      {
        "lessonNumber": 1.4,
        "lessonID": "732a9522-95b5-4d5b-9eb9-b9d6d581ff99",
        "lessonType": "Deep Dive",
        "lessonTitle": "Hiss Like A German Cat",
        "lessonSetStart": "",
        "lessonSetEnd": "",
        "lessonDescription": `Feli from Germany shares her best tips for the German "CH." Pronounce the word ich/I - like a pro`,
        "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_de/lesson/tile/732a9522-95b5-4d5b-9eb9-b9d6d581ff99_0.jpg",
        "lessonLink": "https://meetkleo.page.link/TrG7Z5jp9BipTBP58",
        "lessonLock": "free",
        "lessonLanguage": "German",
        "lessonTag": "pronunciation"
      },
      {
        "lessonNumber": 40.9,
        "lessonID": "fb35ae5e-b7e2-4f50-b633-aac99c5fc63c",
        "lessonType": "Deep Dive",
        "lessonTitle": `Master German CH Pronunciation`,
        "lessonSetStart": "",
        "lessonSetEnd": "",
        "lessonDescription": `Hiss like a cat and clear your throat. Know when to use each sound`,
        "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_de/lesson/tile/fb35ae5e-b7e2-4f50-b633-aac99c5fc63c_0.jpg",
        "lessonLink": "https://meetkleo.page.link/CYu2BdAa2MmEkrKP8",
        "lessonLock": "free",
        "lessonLanguage": "German",
        "lessonTag": "pronunciation"
      },
      {
        "lessonNumber": 34.4,
        "lessonID": "4c902771-14e0-4ab1-925e-52fbd7d5e1e0",
        "lessonType": "Vocabulary_Show",
        "lessonTitle": "Fünfhundert-fünfundfünfzig",
        "lessonSetStart": "",
        "lessonSetEnd": "",
        "lessonDescription":"That's a word, not a sentence. Need we say more? It's tongue twister time!",
        "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/other/Web/tongue_twisterF92122v3.jpg",
        "lessonLink": "https://meetkleo.page.link/4Lkpsb1be4xXwXGr8",
        "lessonLock": "free",
        "lessonLanguage": "German",
        "lessonTag": "funtopics"
      },
      {
        "lessonNumber": 45.7,
        "lessonID": "8db75fa2-2cee-484b-99f5-b313992324d3",
        "lessonType": "Deep Dive",
        "lessonTitle": "Mix It Up With These Idioms",
        "lessonSetStart": "",
        "lessonSetEnd": "",
        "lessonDescription": `"Fingers crossed" and more! Sound like a local with three idioms you can use all the time`,
        "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_de/lesson/tile/8db75fa2-2cee-484b-99f5-b313992324d3_0.jpg",
        "lessonLink": "https://meetkleo.page.link/zqJekmxWzMheJuVQ6",
        "lessonLock": "free",
        "lessonLanguage": "German",
        "lessonTag": "funtopics"
      },
      {
        "lessonNumber": 44.4,
        "lessonID": "f39e237c-d863-4f54-bf86-6c720b882885",
        "lessonType": "Vocabulary",
        "lessonTitle": "Pronounce The German V",
        "lessonSetStart": "",
        "lessonSetEnd": "",
        "lessonDescription": "Pronounce the letter V as an F-sound. See how this changes with loan words from other languages",
        "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_de/lesson/tile/f39e237c-d863-4f54-bf86-6c720b882885_0.jpg",
        "lessonLink": "https://meetkleo.page.link/u6jFKsZZHfQ9uh8TA",
        "lessonLock": "free",
        "lessonLanguage": "German",
        "lessonTag": "pronunciation"
      },
      {
        "lessonNumber": 43.1,
        "lessonID": "d67b108d-6b05-457c-8164-501ccc90505a",
        "lessonType": "Concept",
        "lessonTitle": "Something Cool",
        "lessonSetStart": "",
        "lessonSetEnd": "",
        "lessonDescription": `Learn to say things like "I learned something cool!" See an important usage of the indefinite pronoun etwas`,
        "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_de/lesson/tile/18ff61d9-e1ba-47e5-950f-da0721bb6783_0.jpg",
        "lessonLink": "https://meetkleo.page.link/xH6hN2oiucguoeoJA",
        "lessonLock": "free",
        "lessonLanguage": "German",
        "lessonTag": "course"
      },
      {
        "lessonNumber": 42.5,
        "lessonID": "134c97bc-7772-4a62-9af4-c4c8d3ed7462",
        "lessonType": "Deep Dive",
        "lessonTitle": "Dine And Shine",
        "lessonSetStart": "",
        "lessonSetEnd": "",
        "lessonDescription": "Prost! Make your next German meal a success with these three phrases",
        "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_de/lesson/tile/134c97bc-7772-4a62-9af4-c4c8d3ed7462_0.jpg",
        "lessonLink": "https://meetkleo.page.link/gBurpfAV6SRU8y9E8",
        "lessonLock": "free",
        "lessonLanguage": "German",
        "lessonTag": "funtopics"
      },
      {
        "lessonNumber": 41.7,
        "lessonID": "ba787483-cc2e-4249-91d0-c1250bd2686e",
        "lessonType": "Deep Dive",
        "lessonTitle": "Break The Ice",
        "lessonSetStart": "",
        "lessonSetEnd": "",
        "lessonDescription": "Get a conversation rolling in any type of situation",
        "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_de/lesson/tile/ba787483-cc2e-4249-91d0-c1250bd2686e_0.jpg",
        "lessonLink": "https://meetkleo.page.link/2JG7tp4JdnfhQrLQ9",
        "lessonLock": "free",
        "lessonLanguage": "German",
        "lessonTag": "funtopics"
      },
      {
        "lessonNumber": 41.9,
        "lessonID": "9feadf09-c758-4695-a11a-af91b3fee513",
        "lessonType": "Deep Dive",
        "lessonTitle": "Tell The Time",
        "lessonSetStart": "",
        "lessonSetEnd": "",
        "lessonDescription": "Use this simple structure to say what time it is. Understand the basics of military time",
        "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_de/lesson/tile/9feadf09-c758-4695-a11a-af91b3fee513_0.jpg",
        "lessonLink": "https://meetkleo.page.link/Z3Uw5UNLbsK9EAm48",
        "lessonLock": "free",
        "lessonLanguage": "German",
        "lessonTag": "funtopics"
      },
        {
          "lessonNumber": 1.1,
          "lessonID": "7b6b8358-9f66-4491-a58d-77c9f8e08b85",
          "lessonType": "Concept",
          "lessonTitle": "Ich bin/I am",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Share lots of great information about yourself using the top verb in German. Come on in, and meet the family!",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_de/lesson/tile/7b6b8358-9f66-4491-a58d-77c9f8e08b85_0.jpg",
          "lessonLink": "https://meetkleo.page.link/8oBQQhcQzJbeVRoC9",
          "lessonLock": "free",
          "lessonLanguage": "German",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 1.2,
          "lessonID": "d9aff321-33ff-49fd-9d92-0a7b7f9a84ac",
          "lessonType": "Vocabulary_Show",
          "lessonTitle": "Describing Yourself",
          "lessonSetStart": 1,
          "lessonSetEnd": 3,
          "lessonDescription": `Learn high-frequency vocab words to combine with "ich bin." Say that you're happy, nervous, tired, and more`,
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_es/lesson/tile/1eebbd6a-898d-4eb8-bb6d-cc98da7e65ce_0.png",
          "lessonLink": "https://meetkleo.page.link/ehfcdpw79U5iWmsn8",
          "lessonLock": "free",
          "lessonLanguage": "German",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 1.3,
          "lessonID": "7011fb8c-5de2-437c-8098-a764e6f519e4",
          "lessonType": "Drill",
          "lessonTitle": "Share About Yourself",
          "lessonSetStart": 1,
          "lessonSetEnd": 3,
          "lessonDescription": `Practice pairing "ich bin" with new vocabulary words to tell others about yourself`,
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_de/lesson/tile/7011fb8c-5de2-437c-8098-a764e6f519e4_0.jpg",
          "lessonLink": "https://meetkleo.page.link/4yZktw3w9w24QxgK6",
          "lessonLock": "free",
          "lessonLanguage": "German",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 1.9,
          "lessonID": "e45fb92d-48a3-4bcb-a4e0-03d88d48f215",
          "lessonType": "Vocabulary",
          "lessonTitle": "Share roles using ich bin",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Share your profession and nationality",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_de/lesson/tile/e45fb92d-48a3-4bcb-a4e0-03d88d48f215_0.jpg",
          "lessonLink": "https://meetkleo.page.link/QttB8rqTFf2VemzY7",
          "lessonLock": "free",
          "lessonLanguage": "German",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 1.1,
          "lessonID": "f54041a9-471b-4fc5-a66c-d958790f7b6c",
          "lessonType": "Vocabulary",
          "lessonTitle": "Share your name",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Exchange names with others in several ways",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_de/lesson/tile/f54041a9-471b-4fc5-a66c-d958790f7b6c_0.jpg",
          "lessonLink": "https://meetkleo.page.link/XuZB6wboFd7CSeSG7",
          "lessonLock": "free",
          "lessonLanguage": "German",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 1.12,
          "lessonID": "ec504db9-e9dc-44a3-9eb3-73b32d0cc40b",
          "lessonType": "Vocabulary",
          "lessonTitle": "The Basics",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Learn must-know words, like yes and no. You'll be able to use these all day long",
          "lessonImage": "",
          "lessonLink": "https://meetkleo.page.link/7VCLn1HGrX3hx9iq6",
          "lessonLock": "free",
          "lessonLanguage": "German",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 1.13,
          "lessonID": "e13fe3e8-bc76-4521-ba1c-46f36246a282",
          "lessonType": "Vocabulary",
          "lessonTitle": "The Basics",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Practice speaking must-know words, like yes and no. You'll really use these all day long",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_de/lesson/tile/e13fe3e8-bc76-4521-ba1c-46f36246a282_0.jpg",
          "lessonLink": "https://meetkleo.page.link/sN5v5iZ4wreMCK8YA",
          "lessonLock": "free",
          "lessonLanguage": "German",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 1.14,
          "lessonID": "f7c0576a-8344-4e67-b2fb-cfbc6f25d701",
          "lessonType": "Vocabulary",
          "lessonTitle": "Round-Up Challenge",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Beginner speaking challenge. 12-questions. See all that you can say",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_de/lesson/tile/f7c0576a-8344-4e67-b2fb-cfbc6f25d701_0.png",
          "lessonLink": "https://meetkleo.page.link/ndDfAF76ibdj8qya8",
          "lessonLock": "free",
          "lessonLanguage": "German",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 2.1,
          "lessonID": "788ae703-560b-4d1e-bacd-4a3639829aea",
          "lessonType": "Vocabulary",
          "lessonTitle": "Ich habe/I have",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Say what you have and even what you're feeling, using the #2 verb in German",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_de/lesson/tile/788ae703-560b-4d1e-bacd-4a3639829aea_0.jpg",
          "lessonLink": "https://meetkleo.page.link/9ht2BjuXish8UnuZ6",
          "lessonLock": "free",
          "lessonLanguage": "German",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 34.2,
          "lessonID": "47e08c95-c986-4d83-a77e-9d86be1161c4",
          "lessonType": "Deep Dive",
          "lessonTitle": "Auf Geht's Cincinnati!",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Cheer for your home team - in German!",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_de/lesson/tile/47e08c95-c986-4d83-a77e-9d86be1161c4_0.1",
          "lessonLink": "https://meetkleo.page.link/HzpXHtcnVxARcda9A",
          "lessonLock": "free",
          "lessonLanguage": "German",
          "lessonTag": "funtopics"
        },
        {
          "lessonNumber": 34.3,
          "lessonID": "e8dfcdc4-ca94-4793-8864-add202b6a098",
          "lessonType": "Deep Dive",
          "lessonTitle": "Train Your Dog",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Feli from Germany - also known as dog trainer extraordinaire? Can YOU get Oskar to sit and lay down?",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_de/lesson/tile/e8dfcdc4-ca94-4793-8864-add202b6a098_0.26",
          "lessonLink": "https://meetkleo.page.link/KggY6xpWaMYPbnPb8",
          "lessonLock": "free",
          "lessonLanguage": "German",
          "lessonTag": "funtopics"
        },
        {
          "lessonNumber": 34.4,
          "lessonID": "4c902771-14e0-4ab1-925e-52fbd7d5e1e0",
          "lessonType": "Vocabulary",
          "lessonTitle": "Tongue twister time!",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Try saying some of the hardest words in German. Feli from Germany and her boyfriend Ben tackled this challenge, and now you can too",
          "lessonImage": "",
          "lessonLink": "https://meetkleo.page.link/4Lkpsb1be4xXwXGr8",
          "lessonLock": "free",
          "lessonLanguage": "German",
          "lessonTag": "funtopics"
        },
        {
          "lessonNumber": 35.1,
          "lessonID": "84b7632c-11cb-4d50-9d86-d0b973d1dc07",
          "lessonType": "Deep Dive",
          "lessonTitle": "Feli's Potato Salad",
          "lessonSetStart": 1,
          "lessonSetEnd": 11,
          "lessonDescription": "Cooking challenge hosted by Feli from Germany. Follow a simple recipe in German. Accompanied by free vocab/drill lessons",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_de/lesson/tile/84b7632c-11cb-4d50-9d86-d0b973d1dc07_0.jpg",
          "lessonLink": "https://meetkleo.page.link/1ytcgkxJkZF1TeDs7",
          "lessonLock": "free",
          "lessonLanguage": "German",
          "lessonTag": "funtopics"
        },
        {
          "lessonNumber": 40.5,
          "lessonID": "a2cc1df4-e47d-4efc-abee-618116f5f0e3",
          "lessonType": "Vocabulary",
          "lessonTitle": `Pronounce The Leading "S"`,
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Learn about regional variations in how the “S” is pronounced at the start of words",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_de/lesson/tile/a2cc1df4-e47d-4efc-abee-618116f5f0e3_0.jpg",
          "lessonLink": "https://meetkleo.page.link/AEahDBvcCYpSvZW76",
          "lessonLock": "free",
          "lessonLanguage": "German",
          "lessonTag": "pronunciation"
        },
        {
          "lessonNumber": 40.12,
          "lessonID": "7c06a1c8-dd10-450d-afe1-f5b844c79da8",
          "lessonType": "Deep Dive",
          "lessonTitle": "A Night Out In Berlin",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": `Order a drink or two at a Kneipe. Meet up with Geoff & Alex from "Americans in Germany Drinking Whiskey" podcast`,
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_de/lesson/tile/7c06a1c8-dd10-450d-afe1-f5b844c79da8_0.jpg",
          "lessonLink": "https://meetkleo.page.link/rveCuoJ5vZymoJrdA",
          "lessonLock": "free",
          "lessonLanguage": "German",
          "lessonTag": "funtopics"
        },
        {
          "lessonNumber": 34.5,
          "lessonID": "40ff2cd0-dd76-4046-ba4c-3401c9867e8a",
          "lessonType": "Deep Dive",
          "lessonTitle": "Christmas Traditions",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription":`Hosted by "Americans in Germany Drinking Whiskey" podcast. Holiday special!`,
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_de/lesson/tile/40ff2cd0-dd76-4046-ba4c-3401c9867e8a_0.23",
          "lessonLink": "https://meetkleo.page.link/rioJHbytv63iLdQZ8",
          "lessonLock": "free",
          "lessonLanguage": "German",
          "lessonTag": "funtopics"
        },
        {
          "lessonNumber": 8.4,
          "lessonID": "9867d6ef-ca4b-4507-82f5-b9d7d260111b",
          "lessonType": "Deep Dive",
          "lessonTitle": "Formality Scenarios",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": `See if you can choose the right formality level to match each situation`,
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_es/lesson/tile/3953c6a6-4d98-4717-bde6-e575573f31f9_0.jpg",
          "lessonLink": "https://meetkleo.page.link/2RyaypmshiVPDiHL7",
          "lessonLock": "free",
          "lessonLanguage": "Spanish",
          "lessonTag": "course",
          "newrelease": "yes"
        },
        {
          "lessonNumber": 13.1,
          "lessonID": "5c50fa8a-e800-4ae1-b154-09cd2b91097b",
          "lessonType": "Concept",
          "lessonTitle": "Speaking About The Present",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": `Learn conjugation in context. Use regular A-R verbs for singular subjects`,
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_es/lesson/tile/5c50fa8a-e800-4ae1-b154-09cd2b91097b_0.jpg",
          "lessonLink": "https://meetkleo.page.link/jNp23fecTDgFGUw59",
          "lessonLock": "free",
          "lessonLanguage": "Spanish",
          "lessonTag": "course",
          "newrelease": "yes"
        },
        {
          "lessonNumber": 24.1,
          "lessonID": "191bc634-ace8-4dfa-84aa-2d1e273bee30",
          "lessonType": "Concept",
          "lessonTitle": "Using Commands",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": `Build informal commands to help train the family dog`,
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_es/lesson/tile/191bc634-ace8-4dfa-84aa-2d1e273bee30_0.jpg",
          "lessonLink": "https://meetkleo.page.link/XJUPYX4wZj4r8Lse8",
          "lessonLock": "free",
          "lessonLanguage": "Spanish",
          "lessonTag": "course",
          "newrelease": "yes"
        },               
        {
          "lessonNumber": 1.1,
          "lessonID": "1abca158-3f19-499d-b3f5-ffff2a85cb8e",
          "lessonType": "Concept",
          "lessonTitle": "Expressing Wants",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": `Say what you want by pairing "Quiero" with both things and actions. Come on in, and meet the family!`,
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_es/lesson/tile/1abca158-3f19-499d-b3f5-ffff2a85cb8e_0.jpg",
          "lessonLink": "https://meetkleo.page.link/ve751qD5nvaN3Q5c7",
          "lessonLock": "free",
          "lessonLanguage": "Spanish",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 1.2,
          "lessonID": "49551a06-b0e8-42df-8583-bf1dcad9918e",
          "lessonType": "Vocabulary_Show",
          "lessonTitle": "Words That Go With Quiero",
          "lessonSetStart": 1,
          "lessonSetEnd": 3,
          "lessonDescription": `Learn high-frequency vocab words to pair with "Quiero." Want to travel or speak Spanish? Say it here`,
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_es/lesson/tile/1eebbd6a-898d-4eb8-bb6d-cc98da7e65ce_0.png",
          "lessonLink": "https://meetkleo.page.link/bEwSTYTPBA5vKdhm7",
          "lessonLock": "free",
          "lessonLanguage": "Spanish",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 1.3,
          "lessonID": "96203faa-1669-4591-b0d8-8f963a2b78ce",
          "lessonType": "Drill",
          "lessonTitle": "Words That Go With Quiero",
          "lessonSetStart": 1,
          "lessonSetEnd": 3,
          "lessonDescription": `Practice pairing "Quiero" with new vocabulary words to express what you want`,
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_es/lesson/tile/96203faa-1669-4591-b0d8-8f963a2b78ce_0.jpg",
          "lessonLink": "https://meetkleo.page.link/YcGuf99wWq2Ynm9L8",
          "lessonLock": "free",
          "lessonLanguage": "Spanish",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 1.4,
          "lessonID": "4809b72c-f5c1-4eb3-8626-14639f7b1811",
          "lessonType": "Deep Dive",
          "lessonTitle": "The Power Of Spanish Verbs",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": `Understand "Yo quiero" vs. "Quiero". See why it's subject-optional when speaking Spanish`,
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_es/lesson/tile/4809b72c-f5c1-4eb3-8626-14639f7b1811_0.jpg",
          "lessonLink": "https://meetkleo.page.link/4ak6GTzvYQHUjM436",
          "lessonLock": "free",
          "lessonLanguage": "Spanish",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 1.9,
          "lessonID": "8ca99980-739d-435f-9f77-d4ad520fc181",
          "lessonType": "Vocabulary",
          "lessonTitle": "The Basics",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Learn must-know words, like yes and no. You'll be able to use these all day long",
          "lessonImage": "",
          "lessonLink": "https://meetkleo.page.link/LKgchbnTJnYccNqf9",
          "lessonLock": "free",
          "lessonLanguage": "Spanish",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 1.1,
          "lessonID": "24d5250c-ed73-4194-948b-a9839a1bc8ce",
          "lessonType": "Vocabulary",
          "lessonTitle": "The Basics",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Practice speaking must-know words, like yes and no. You'll use these all day long",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_es/lesson/tile/24d5250c-ed73-4194-948b-a9839a1bc8ce_0.jpg",
          "lessonLink": "https://meetkleo.page.link/L3hPcYAEN1F8HXxc9",
          "lessonLock": "free",
          "lessonLanguage": "Spanish",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 1.11,
          "lessonID": "6739d81d-18d7-41c5-8ab1-d48679e1aaf8",
          "lessonType": "Deep Dive",
          "lessonTitle": "Make Polite Requests",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": `Use "Me gustaría" to make softer requests. Discover when to use this form`,
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_es/lesson/tile/6739d81d-18d7-41c5-8ab1-d48679e1aaf8_0.jpg",
          "lessonLink": "https://meetkleo.page.link/32TtVfzmA1ueqVMKA",
          "lessonLock": "free",
          "lessonLanguage": "Spanish",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 8.9,
          "lessonID": "e8c99838-030a-4cb9-833a-66dc9fad86f3",
          "lessonType": "Deep Dive",
          "lessonTitle": "Never Be Rude Again",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": `Discover an important cultural norm in Latin America`,
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_es/lesson/tile/e8c99838-030a-4cb9-833a-66dc9fad86f3_0.jpg",
          "lessonLink": "https://meetkleo.page.link/sgKfZpthLduZKtbN8",
          "lessonLock": "free",
          "lessonLanguage": "Spanish",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 1.12,
          "lessonID": "1eebbd6a-898d-4eb8-bb6d-cc98da7e65ce",
          "lessonType": "Vocabulary",
          "lessonTitle": "Round-Up Challenge",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Beginner speaking challenge. 11-questions. See all that you can say",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_es/lesson/tile/1eebbd6a-898d-4eb8-bb6d-cc98da7e65ce_0.png",
          "lessonLink": "https://meetkleo.page.link/taVa38dZfUL56aaK7",
          "lessonLock": "free",
          "lessonLanguage": "Spanish",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 2.1,
          "lessonID": "cdbb9768-438d-493e-a969-b0de369409a7",
          "lessonType": "Concept",
          "lessonTitle": "Soy/I am",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Share lots of great information about yourself using the top verb in Spanish",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_es/lesson/tile/cdbb9768-438d-493e-a969-b0de369409a7_0.jpg",
          "lessonLink": "https://meetkleo.page.link/CFjxzMG8P5tAeFuJA",
          "lessonLock": "free",
          "lessonLanguage": "Spanish",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 2.4,
          "lessonID": "d76ae957-6f5b-4cdc-b6c9-319de2b82288",
          "lessonType": "Deep Dive",
          "lessonTitle": `Choose "to be" or "to be"`,
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": `Know when to use each of Spanish's verbs meaning "to be". Choose "Soy" vs. "Estoy"`,
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_es/lesson/tile/d76ae957-6f5b-4cdc-b6c9-319de2b82288_0.jpg",
          "lessonLink": "https://meetkleo.page.link/M1VroMUVxNagxk4e8",
          "lessonLock": "free",
          "lessonLanguage": "Spanish",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 32.1,
          "lessonID": "33f803cf-d891-46fa-a489-108ab584f159",
          "lessonType": "Drill",
          "lessonTitle": "Beginner Speaking Challenge",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Speaking challenge pulling from earlier course content. 7-questions. See all that you can say",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_es/lesson/tile/76d94d40-d940-47c6-84a7-f97e2e7b8c4d_0.jpg",
          "lessonLink": "https://meetkleo.page.link/LXsZU1TxkLhFDnKz5",
          "lessonLock": "free",
          "lessonLanguage": "Spanish",
          "lessonTag": "funtopics"
        },
        {
          "lessonNumber": 32.4,
          "lessonID": "978590bf-8272-471f-b2c1-bc240b3f321a",
          "lessonType": "Drill",
          "lessonTitle": "Speaking Workout",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Intermediate speaking challenge. Covering 10 things you might want to share about yourself",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_es/lesson/tile/978590bf-8272-471f-b2c1-bc240b3f321a_0.jpg",
          "lessonLink": "https://meetkleo.page.link/Yua9xR4Wyst3zDxQ7",
          "lessonLock": "free",
          "lessonLanguage": "Spanish",
          "lessonTag": "funtopics"
        },
          {
          "lessonNumber": 34.2,
          "lessonID": "a700080a-54dd-4027-8c52-c629206947f5",
          "lessonType": "Deep Dive",
          "lessonTitle": "Buon San Valentino!",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Know how to spread the love on Valentine's Day or any day of the year. You'll surely fall in love with the language of love!",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_it/lesson/tile/a700080a-54dd-4027-8c52-c629206947f5_0.10",
          "lessonLink": "https://meetkleo.page.link/Wt9gHVA8RmM1j2rs6",
          "lessonLock": "free",
          "lessonLanguage": "Italian",
          "newrelease": "yes",
          "lessonTag": "funtopics"
        },
        {
          "lessonNumber": 1.13,
          "lessonID": "1eadd259-b6e0-44e8-9247-606182a07e05",
          "lessonType": "Deep Dive",
          "lessonTitle": "Greet People",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Use the right greeting no matter the time of day",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_it/lesson/tile/1eadd259-b6e0-44e8-9247-606182a07e05_0.jpg",
          "lessonLink": "https://meetkleo.page.link/xGpuQ11rSsGnDuHf8",
          "lessonLock": "free",
          "lessonLanguage": "Italian",
          "newrelease": "yes",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 2.13,
          "lessonID": "20506592-4e4c-4f3e-9402-18d3216532a5",
          "lessonType": "Deep Dive",
          "lessonTitle": "Ordering At Bars And Restaurants",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": `Order your favorite Italian food or drink. Meet up with Andrea from "Simplitalian"`,
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_it/lesson/tile/20506592-4e4c-4f3e-9402-18d3216532a5_0.jpg",
          "lessonLink": "https://meetkleo.page.link/3NqFC4CYpoXNP4ay7",
          "lessonLock": "free",
          "lessonLanguage": "Italian",
          "lessonTag": "funtopics"
        },
        {
          "lessonNumber": 3.14,
          "lessonID": "7b3dde4d-230b-421d-b16f-19ccd7d9b5c1",
          "lessonType": "Deep Dive",
          "lessonTitle": "Exit A Conversation - Like A Local",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Say farewell to the same old goodbyes! End your conversations smoothly. Buona giornata!",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_it/lesson/tile/7b3dde4d-230b-421d-b16f-19ccd7d9b5c1_0.jpg",
          "lessonLink": "https://meetkleo.page.link/JhZUj6JT7PVbB9pG8",
          "lessonLock": "free",
          "lessonLanguage": "Italian",
          "lessonTag": "funtopics"
        },
        {
          "lessonNumber": 34.2,
          "lessonID": "c812f433-f230-4e6c-9c59-36d878e36ca0",
          "lessonType": "Deep Dive",
          "lessonTitle": "Break The Ice In Style",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "What's up? How's life? Avoid a boring routine with more ways to ask how someone is doing",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_it/lesson/tile/c812f433-f230-4e6c-9c59-36d878e36ca0_0.jpg",
          "lessonLink": "https://meetkleo.page.link/jNyy1xNvby9tZdsF9",
          "lessonLock": "free",
          "lessonLanguage": "Italian",
          "lessonTag": "funtopics"
        },
        {
          "lessonNumber": 1.15,
          "lessonID": "e9e31388-4d07-491d-a889-46258225294c",
          "lessonType": "Deep Dive",
          "lessonTitle": "Shine At Your Next Italian Meal",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Cin cin! Make your next Italian meal a success with these three phrases",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_it/lesson/tile/e9e31388-4d07-491d-a889-46258225294c_0.jpg",
          "lessonLink": "https://meetkleo.page.link/xAes7RP7FeQwXxFi8",
          "lessonLock": "free",
          "lessonLanguage": "Italian",
          "lessonTag": "funtopics"
        },
        {
          "lessonNumber": 1.1,
          "lessonID": "ea0e0322-6498-4cf5-baf9-4f8d87d29b35",
          "lessonType": "Concept",
          "lessonTitle": "Sono/I Am",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Share lots of great information about yourself using the top verb in Italian. Come on in, and meet the family!",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_it/lesson/tile/ea0e0322-6498-4cf5-baf9-4f8d87d29b35_0.jpg",
          "lessonLink": "https://meetkleo.page.link/M5ctFHNNkFscP7bBA",
          "lessonLock": "free",
          "lessonLanguage": "Italian",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 1.2,
          "lessonID": "e2566baa-cf25-47aa-a66a-466e015be14f",
          "lessonType": "Vocabulary_Show",
          "lessonTitle": "Words That Go With Sono",
          "lessonSetStart": 1,
          "lessonSetEnd": 3,
          "lessonDescription": `Learn high-frequency vocab words to combine with "Sono." Say that you're happy, sad, and more`,
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_es/lesson/tile/1eebbd6a-898d-4eb8-bb6d-cc98da7e65ce_0.png",
          "lessonLink": "https://meetkleo.page.link/q4eDePPpgTFda3Gs5",
          "lessonLock": "free",
          "lessonLanguage": "Italian",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 1.3,
          "lessonID": "b6889bdc-f8f1-458b-bbdf-ca3f78f2ae90",
          "lessonType": "Drill",
          "lessonTitle": "Words That Go With Sono",
          "lessonSetStart": 1,
          "lessonSetEnd": 3,
          "lessonDescription": `Practice pairing "Sono" with new vocabulary words to tell others all about yourself`,
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_it/lesson/tile/b6889bdc-f8f1-458b-bbdf-ca3f78f2ae90_0.jpg",
          "lessonLink": "https://meetkleo.page.link/5boRhrLmewDta6C39",
          "lessonLock": "free",
          "lessonLanguage": "Italian",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 1.4,
          "lessonID": "df357471-2dc5-4968-b6fe-888975694774",
          "lessonType": "Deep Dive",
          "lessonTitle": "To Be Or To Stay",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": `Choose the right verb to express how you're feeling or doing. Ask the same of others`,
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_it/lesson/tile/df357471-2dc5-4968-b6fe-888975694774_0.jpg",
          "lessonLink": "https://meetkleo.page.link/yhxYJWg6YuzhEjDf7",
          "lessonLock": "free",
          "lessonLanguage": "Italian",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 1.9,
          "lessonID": "f2eb568e-0182-4c01-9a44-d86269ffbe8b",
          "lessonType": "Vocabulary",
          "lessonTitle": "Share roles using Sono",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Share your profession and nationality",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_it/lesson/tile/f2eb568e-0182-4c01-9a44-d86269ffbe8b_0.jpg",
          "lessonLink": "https://meetkleo.page.link/sK9nHoaEceAJSTPC9",
          "lessonLock": "free",
          "lessonLanguage": "Italian",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 1.1,
          "lessonID": "00b1e7ab-7031-4fd5-8b88-fec351b45606",
          "lessonType": "Vocabulary",
          "lessonTitle": "The Basics",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Learn must-know words, like yes and no. You'll be able to use these all day long",
          "lessonImage": "",
          "lessonLink": "https://meetkleo.page.link/6YiEBVcyBTRCbnE67",
          "lessonLock": "free",
          "lessonLanguage": "Italian",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 1.11,
          "lessonID": "b0c1baef-1827-46a2-b68f-0084e95265a8",
          "lessonType": "Vocabulary",
          "lessonTitle": "The Basics",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Practice speaking must-know words, like yes and no. You'll use these all day long",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_it/lesson/tile/b0c1baef-1827-46a2-b68f-0084e95265a8_0.jpg",
          "lessonLink": "https://meetkleo.page.link/uX8XoKPJ143AHgcR6",
          "lessonLock": "free",
          "lessonLanguage": "Italian",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 1.12,
          "lessonID": "694550ef-1ae4-47f3-89f3-b146c565556c",
          "lessonType": "Vocabulary",
          "lessonTitle": "Share your name",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Exchange names with others in several ways",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_it/lesson/tile/694550ef-1ae4-47f3-89f3-b146c565556c_0.jpg",
          "lessonLink": "https://meetkleo.page.link/4zsFjUQB7QLHSZR48",
          "lessonLock": "free",
          "lessonLanguage": "Italian",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 1.14,
          "lessonID": "033015af-f3cb-4dea-8799-50cf253afcc0",
          "lessonType": "Vocabulary",
          "lessonTitle": "Round-Up Challenge",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Beginner speaking challenge. 12-questions. See all that you can say",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_it/lesson/tile/033015af-f3cb-4dea-8799-50cf253afcc0_0.png",
          "lessonLink": "https://meetkleo.page.link/LjSM7k6bXYWid91R8",
          "lessonLock": "free",
          "lessonLanguage": "Italian",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 2.1,
          "lessonID": "1892be7f-8907-4a59-8f88-fdc4391b3063",
          "lessonType": "Vocabulary",
          "lessonTitle": "Expressing wants",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": `Say what you want by pairing "Voglio" with both things and actions`,
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_it/lesson/tile/1892be7f-8907-4a59-8f88-fdc4391b3063_0.jpg",
          "lessonLink": "https://meetkleo.page.link/59JsxJpp5BhTHJRQ7",
          "lessonLock": "free",
          "lessonLanguage": "Italian",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 34.1,
          "lessonID": "120df915-73df-496d-aeac-7b49923987e7",
          "lessonType": "Vocabulary",
          "lessonTitle": "Speaking Challenge",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Speaking challenge pulling from earlier course content. 9-questions. See all that you can say",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_it/lesson/tile/120df915-73df-496d-aeac-7b49923987e7_0.jpg",
          "lessonLink": "https://meetkleo.page.link/HmE4WmUFQXvoThVU7",
          "lessonLock": "free",
          "lessonLanguage": "Italian",
          "lessonTag": "funtopics"
        },
        {
          "lessonNumber": 34.3,
          "lessonID": "4d3a0f23-780e-445f-a9d8-51ca4d08fa38",
          "lessonType": "Deep Dive",
          "lessonTitle": "An Italian Christmas",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": `You won't want to miss this special holiday lesson. Discover Italian traditions and greetings. Buon Natale!`,
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_it/lesson/tile/4d3a0f23-780e-445f-a9d8-51ca4d08fa38_0.jpg",
          "lessonLink": "https://meetkleo.page.link/viuNYw8pETiqed3J7",
          "lessonLock": "free",
          "lessonLanguage": "Italian",
          "lessonTag": "funtopics",
        },
        {
          "lessonNumber": 34.4,
          "lessonID": "eb9d1856-2c11-4f7e-80b4-2413e672b228",
          "lessonType": "Deep Dive",
          "lessonTitle": "Near Year's Eve in Italy",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": `Learn what to eat, wear, and say - to bring good luck for the new year. Buon Anno!`,
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_it/lesson/tile/eb9d1856-2c11-4f7e-80b4-2413e672b228_1.png",
          "lessonLink": "https://meetkleo.page.link/TbbYWq5KVgCqkThd7",
          "lessonLock": "free",
          "lessonLanguage": "Italian",
          "lessonTag": "funtopics",
        },
        {
          "lessonNumber": 7.1,
          "lessonID": "6806c3c7-5bff-4812-a615-6a3190b12002",
          "lessonType": "Concept",
          "lessonTitle": "Finding your way",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": `Find all that you need - people, places and things. Use various forms of "Where is?"`,
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_uk/lesson/tile/6806c3c7-5bff-4812-a615-6a3190b12002_0.21",
          "lessonLink": "https://meetkleo.page.link/3Y4tSp4Rw4CUMvVX9",
          "lessonLock": "free",
          "lessonLanguage": "Ukrainian",
          "lessonTag": "course",
          "newrelease": "yes"
        },
        {
          "lessonNumber": 6.1,
          "lessonID": "b41a6639-91f8-4506-91d7-d0fd5fad713a",
          "lessonType": "Concept",
          "lessonTitle": "Saying what you like",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "What are your favorite things and activities? Share them here. This is a great way to connect with a new friend",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_uk/lesson/tile/b41a6639-91f8-4506-91d7-d0fd5fad713a_0.26",
          "lessonLink": "https://meetkleo.page.link/M2nGWJink5hKBmVX9",
          "lessonLock": "free",
          "lessonLanguage": "Ukrainian",
          "lessonTag": "course",
          "newrelease": "yes"
        },
        {
          "lessonNumber": 5.1,
          "lessonID": "cfa97da0-fbee-4f93-a8b7-2bdf0a746892",
          "lessonType": "Concept",
          "lessonTitle": "Having A Conversation",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "You know how to start a conversation. Now here's how to keep it rolling",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_uk/lesson/tile/cfa97da0-fbee-4f93-a8b7-2bdf0a746892_0.26",
          "lessonLink": "https://meetkleo.page.link/6CgbrxVvvnHEQJmQ7",
          "lessonLock": "free",
          "lessonLanguage": "Ukrainian",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 4.1,
          "lessonID": "a41b538c-017e-4e90-9182-5361d53b24c2",
          "lessonType": "Deep Dive",
          "lessonTitle": "Winter Holidays",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Discover the special events and traditions celebrated in Ukraine. Practice saying the greetings of the season",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_uk/lesson/tile/a41b538c-017e-4e90-9182-5361d53b24c2_0.jpg",
          "lessonLink": "https://meetkleo.page.link/ok9u8KjeS4iUmJBh6",
          "lessonLock": "free",
          "lessonLanguage": "Ukrainian",
          "lessonTag": "funtopics"
        },
        {
          "lessonNumber": 3.1,
          "lessonID": "8ab798d7-f386-4d9f-b5e2-7f21f26d1894",
          "lessonType": "Concept",
          "lessonTitle": "I Want",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Say what you want in Ukrainian. Cover a variety of topics, such as ordering food and saying what you want to do",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_uk/lesson/tile/8ab798d7-f386-4d9f-b5e2-7f21f26d1894_0.jpg",
          "lessonLink": "https://meetkleo.page.link/bsfmGTqQ2wfG4WpbA",
          "lessonLock": "free",
          "lessonLanguage": "Ukrainian",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 3.4,
          "lessonID": "eb8b917b-f984-4f2b-a562-8964552cab7c",
          "lessonType": "Concept",
          "lessonTitle": "I Need",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Need to ask someone for help? Mila’s got you covered. Learn to say what you need in a variety of situations",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_uk/lesson/tile/eb8b917b-f984-4f2b-a562-8964552cab7c_0.jpg",
          "lessonLink": "https://meetkleo.page.link/aoXCG4YigT3Uth6U8",
          "lessonLock": "free",
          "lessonLanguage": "Ukrainian",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 1.1,
          "lessonID": "1631101f-703d-44f6-bb14-493c142c45cf",
          "lessonType": "Concept",
          "lessonTitle": "Greetings",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Express yourself in Ukrainian with these important greetings. Try using these the next time you run into someone",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_uk/lesson/tile/1631101f-703d-44f6-bb14-493c142c45cf_0.jpg",
          "lessonLink": "https://meetkleo.page.link/K9wURJQDJSzFbuT99",
          "lessonLock": "free",
          "lessonLanguage": "Ukrainian",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 2.1,
          "lessonID": "6b8e57f4-bd4e-4f8e-9051-fd6bd9a968e8",
          "lessonType": "Concept",
          "lessonTitle": "Introducing Yourself (The Basics)",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": `Use "I am" to share lots of great information about yourself, including your name and where you're from`,
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_uk/lesson/tile/6b8e57f4-bd4e-4f8e-9051-fd6bd9a968e8_0.jpg",
          "lessonLink": "https://meetkleo.page.link/xF1EdNZsogpvLsBB6",
          "lessonLock": "free",
          "lessonLanguage": "Ukrainian",
          "lessonTag": "course"
        },
        {
          "lessonNumber": 2.4,
          "lessonID": "e14940ef-e8ba-40e3-8a5f-d1a98e4e2341",
          "lessonType": "Concept",
          "lessonTitle": "Introducing Yourself (Going A Bit Deeper)",
          "lessonSetStart": "",
          "lessonSetEnd": "",
          "lessonDescription": "Learn about the gender of words in Ukrainian. You'll be able to say how you're feeling and what you do",
          "lessonImage": "https://ddseu0ssi.mo.cloudinary.net/images/en_nt_uk/lesson/tile/e14940ef-e8ba-40e3-8a5f-d1a98e4e2341_0.jpg",
          "lessonLink": "https://meetkleo.page.link/txnmjj2ykBkNJkdu7",
          "lessonLock": "free",
          "lessonLanguage": "Ukrainian",
          "lessonTag": "course"
        }
      ]
);