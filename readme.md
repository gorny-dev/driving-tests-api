# Polish driving tests questions API
### Database
> Database used for this API locates on this site:
> https://www.gov.pl/web/infrastruktura/prawo-jazdy
>
> Download directly:
> https://www.gov.pl/attachment/997c932c-be67-4818-8827-b3a461272aa2

### Installation
##### For usage in your project
> You need to download the excel file, convert it to csv and import it to your database.
>
> Then, clone repo:
> > `git clone https://github.com/gorny-dev/driving-tests-api.git` 
>
> Run 
> > `npm install`
>
> And then
> > `npm run dev`

### Usage
##### You can use the latest version API located on my server
> To get all questions GET
> > `http://polish-driving-tests.domena.pl/api/questions`
>
> To get only one question from 1 to 3628
> > `http://polish-driving-tests.domena.pl/api/<number>`
>
> Or you can also type rand to get random question 
> > `http://polish-driving-tests.domena.pl/api/rand`


Created by gorny-dev 
https://github.com/gorny-dev

Leave a Star :star: :smiley:
