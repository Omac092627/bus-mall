# bus-mall
AUTHOR:
    Lami Beach


This is a blatant rip-off of SkyMall. Not to be used for actual distribution, just to show what your boy can do.

I decided to try and make the site pop because it was mad-bland. Like, seriously dense. It was atrocious. Box shadows are your friend.

I added a chart using chartjs, SHOUT-OUT CHARTJS, thank you for allowing me to beautify my site. Although the syntax was a bit confusing. I managed to change the border widths so the colors "pop" and the user can see what they voted on the most. Honestly, chartjs is a great tool, but the learning curve is barnone. Using the chart, I created an array to store my pictures and passed in a few different colors to render for the borders.

There are only 20 pictures to choose from and honestly, the baby is the most adorable. 

I attempted to structure the code in app.js to allow for an easy read. My brain isn't the most powerful so please bear with me as you descend through the madness.

I added a local storage that tracks the clicks, views, and totals. The local storage starts at the top with a json parse. I wrapped my "new products" in a function that is only called when my local storage is < 0 because i need my products to display. So if the local storage is greater than 0 my local storage will parse the objects into the new product key. Down after the clicks are over, I stringify those parsed products and set them to the local storage. 

  Resources: chartjs library, placeholder.com., for the logo:"http://24.media.tumblr.com/ebce26da67bbee3c5a3d4f5c57c99f8f/tumblr_msaxe5DzAf1snwkluo1_500.gif", I used w3-schools animation for my logo; because they're awesome, used a location.reload() for my vote again button so the user can't waste more of their time.
