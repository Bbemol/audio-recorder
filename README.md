# Audio recorder

This is a simple audio recorder. It does 3 things:
- *record from browser* when you hit record and then *stop*
- *replay your audio* when you play the audio
- *upload to Google Drive* if you previously connected your GG drive account

## Starting the app
- Create a new project in Google Cloud Platform
- Follow the [prerequisites steps here](https://developers.google.com/drive/api/v3/quickstart/js)
- Create an `.env` file following the `.env.example` file and fill it in with your newly created Google App
- Then run the command `npm run dev`


## Work in progress
- [ ] Upload to a specific google drive directory
- [ ] Switch from XML request to fetch
- [ ] Publish on heroku
- [ ] Switch from Vanilla to ReactJS
- [ ] Add rename file functionnality
- [ ] Audio visualization
