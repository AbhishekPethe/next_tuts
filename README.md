nextJS -> Lets say we are having a component where we fetch data from API
when we use that component anywhere , we fetch the data 
but the thing is , when we use that component anywhere many times throughout the code 
NextJS wont fetch the data everytime leading to better performance
NextJS catches that data so that if another fetch request of the same API happens 
it will be faster 
but there is possibility that Data might change in API , in that case 
we need to Revalidate 

fetch("https....." , {
    next : {
        revalidate : 30 
    }
})

after first page visit , if we visit page again within 30 seconds , data will come through cache
If there is another page request after the timeframe , we still get the cached data and in the 
background , NextJS will fetch the data from API and replace it with the cached data
If we dont want to use cache at all , use revalidate : 0


Link -> when link tag is used , nextJS fetches that Link page in the background for faster performance

getStaticParams() -> its like nextJS doesnt know how many pages there might be , so in order to cache all those page in cdn ,
                    and improve the performance , we use this function 
                    its like it creates a directory of all the pages we specified in the function and
                    nextJS loades those pages in advance, READ MORE..

