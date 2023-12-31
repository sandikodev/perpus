interface WPGraphQLParams {
    query: string;
    variables?: object;
}

export async function wordpressQuery({
    query,
    variables = {},
}: WPGraphQLParams) {
    const result = await fetch(import.meta.env.PUBLIC_GRAPHQL, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    if (!result.ok) {
        console.error(result);
        return {};
    }

    const { data } = await result.json();
    return data;
}
