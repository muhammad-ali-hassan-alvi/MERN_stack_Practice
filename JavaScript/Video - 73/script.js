console.log("Running")

function createCard(title, cName, monthsOld, count, duration) {
    document.getElementsByTagName("h1")[0].innerHTML = title;
    document.getElementById("channel").innerText = cName;
    document.getElementById("monthsOld").innerText =  monthsOld;
    document.getElementById("count").innerText = count;
    document.getElementById("duration").innerText = duration;
}

function get_variable(n){
    if (n<1000){
        return n;
    }

    else if(n >= 1000 && n <= 999999){
        return (n/1000) + "K";
    }

    else if(n >= 1000000 && n <= 999999999){
        return (n/1000) + "M";
    }
}

count_one = get_variable(5000)

createCard("JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73" , "CodeWithHarry",  7+"months", count_one, "3:23")

// cName, views, monthsOld, duration, thumbnail
// , 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"