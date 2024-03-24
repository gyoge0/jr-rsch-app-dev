const getRatingText = (rating) => {
    rating = Number(rating);

    if (rating === 1) {
        return "Terrible";
    } else if (rating === 2) {
        return "Bad";
    } else if (rating === 3) {
        return "Average";
    } else if (rating === 4) {
        return "Good";
    } else if (rating === 5) {
        return "Great";
    } else {
        return `Rating: ${rating}`;
    }
};

export default getRatingText;
