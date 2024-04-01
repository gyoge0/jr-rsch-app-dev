const getPriceText = (price) => {
    if (price === "1") {
        return "Value Packed";
    } else if (price === "2") {
        return "Hidden Gems";
    } else if (price === "3") {
        return "High end";
    } else if (price === "4") {
        return "Luxury";
    } else {
        return `Price: ${price}`;
    }
};

export default getPriceText;
