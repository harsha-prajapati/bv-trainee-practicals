var vishal = {
    dbId: 22,
    email: "v@v.com",
    userId: 3275,
    role: "admin",
    githubToken: "github",
    startTrail: function () {
        return "trail started";
    },
    getCoupon: function (name, off) {
        return 10;
    }
};
vishal.email = "v@hv.com";
// vishal.dbId = 55
console.log(vishal.getCoupon.name);
