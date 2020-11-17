class MathUtils {

    public static getRandomInt = (max: number) => {
        return 1 + Math.floor(Math.random() * Math.floor(max - 1));
    }

    public static isPrime = (num: number) => {
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    }
}

export default MathUtils;