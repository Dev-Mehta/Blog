import { ImageResponse } from "next/og";

export const runtime = 'edge';

export async function GET(request: Request) {
    const {searchParams}  = new URL(request.url);
    const hasTitle = searchParams.has('title');
    const title = hasTitle ? searchParams.get('title') + "\n SimplifiedWeb | Dev Mehta" : "SimplifiedWeb | Dev Mehta";
    return new ImageResponse(
        <div
            style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                backgroundColor: 'white',
                backgroundImage: 'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
                backgroundSize: '100px 100px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <svg width="180" height="180" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="360" height="360" fill="url(#pattern0)" />
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use href="#image0_304_2" transform="scale(0.00833333)" />
                        </pattern>
                        <image id="image0_304_2" width="120" height="120" href="data:image/png;base64,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" />
                    </defs>
                </svg>

            </div>
            <div
                style={{
                    display: 'flex',
                    fontSize: 42,
                    fontWeight: 700,
                    fontStyle: 'bold',
                    color: 'black',
                    marginTop: 30,
                    lineHeight: 1.2,
                    whiteSpace: 'pre-wrap',
                }}
            >
                <strong style={{fontWeight: 800}}>{title}</strong>
            </div>
        </div>

    );
}