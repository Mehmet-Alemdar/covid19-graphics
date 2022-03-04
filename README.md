# covid19-graphics
## A website where coronavirus data is reflected in graphics
## Designed in accordance with responsive design
### To run this project
> Enter the project and type these in the terminal respectively and run
```
npm install
```
```
npm run serve
```

## The given [api link](https://corona.lmao.ninja/v2/countries?yesterday&sort) used in this project.

**⚠ The data of the map chart in this project will be displayed in currency expression, to fix this follow the steps below.**
> node_modules > vue-chart-map > src > App.vue 
> 
> convert
> ```
>currencyCurrent: {
>  type: String,
>  default: 'USD'
>}
>```
> to
> ```
>currencyCurrent: {
>  type: String,
>  default: 'none'
>}
>```
## View of the site
### Home page
> <img width="1264" alt="Screen Shot 2022-03-04 at 18 26 35" src="https://user-images.githubusercontent.com/60268874/156796155-91320ef2-8047-4674-8938-3d3f7f3b4016.png">

### Compare page
> <img width="1264" alt="Screen Shot 2022-03-04 at 18 27 27" src="https://user-images.githubusercontent.com/60268874/156796517-af07c9c9-3c50-4db3-bb40-b3efb362d8aa.png">

### Line chart
> <img width="1264" alt="Screen Shot 2022-03-04 at 18 28 45" src="https://user-images.githubusercontent.com/60268874/156796328-dde28bb6-d0da-4efc-9aea-bf961ab4e974.png">

### Country page
> <img width="1264" alt="Screen Shot 2022-03-04 at 18 29 00" src="https://user-images.githubusercontent.com/60268874/156796458-2bd361b7-ce6d-4b51-8d3c-9f4a6d6ce1a9.png">

## Responsive design view of the site
### Compare page
> <img width="286" alt="Screen Shot 2022-03-04 at 18 29 55" src="https://user-images.githubusercontent.com/60268874/156796947-23589c60-9c03-4843-81c4-9b1ec4266f8e.png">

### Line chart
> <img width="286" alt="Screen Shot 2022-03-04 at 18 29 40" src="https://user-images.githubusercontent.com/60268874/156797047-b1d47a12-316c-4cc8-883d-e5d77ff2e1d5.png">

