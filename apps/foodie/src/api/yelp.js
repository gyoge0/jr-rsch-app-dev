const BASE_URL = process.env.EXPO_PUBLIC_YELP_API_BASE_URL;
const TOKEN = process.env.EXPO_PUBLIC_YELP_API_TOKEN;

const searchTerm = async (term) => {
    try {
        const response = await fetch(
            `${BASE_URL}/search?limit=50&location=${encodeURIComponent("leesburg va")}&term=${encodeURIComponent(term)}`,
            {
                headers: {
                    Authorization: `Bearer ${TOKEN}`,
                },
            },
        );
        const body = await response.json();
        // noinspection JSUnresolvedReference
        return body.businesses
            .filter((business) => business.rating && !business.is_closed)
            .map((business) => ({
                image_url: business.image_url,
                // price: (business.price ?? "").length,
                rating: Number(business.rating),
                review_count: business.review_count,
                name: business.name,
                id: business.id,
                phone: business.display_phone,
            }))
            .reduce((group, business) => {
                const { rating } = business;
                const roundedRating = Math.round(rating);
                group[roundedRating] = group[roundedRating] ?? [];
                group[roundedRating].push(business);
                return group;
            }, {});
    } catch (err) {
        console.log(err);
        return null;
    }
};

export { searchTerm };
