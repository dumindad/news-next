import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://wall-street-journal.p.rapidapi.com/api/v1/getSections"

export async function GET(request: Request, { params }: any) {
    const options = {
        Cache: "no-store",
        headers: {
            'X-RapidAPI-Key': 'c9e75ae34dmshdd75f1c71ebc09ap13a696jsnf13aaa771cf5',
            'X-RapidAPI-Host': 'wall-street-journal.p.rapidapi.com'
        }
    };
    const res = await fetch(DATA_SOURCE_URL, options)

    const news: News[] = await res.json()

    return NextResponse.json(news)

}