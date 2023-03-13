interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => string
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const vishal: Admin = {
  dbId: 22,
  email: "v@v.com",
  userId: 3275,
  role: "admin",
  githubToken: "github",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "vishal10", off: 10) => {
    return 10;
  },
};
vishal.email = "v@hv.com";
// vishal.dbId = 55

export {};
