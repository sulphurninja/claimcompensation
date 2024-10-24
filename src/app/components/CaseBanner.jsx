export default function CaseBanner({ title, img1, img2 }) {
    return (
        <div className="relative w-[100%] overflow-hidden">
            <div className="w-[140%] overflow-hidden bg-black/80  flex ">
                <img src={img1} alt={title} className="w-full object-cover opacity-35  h-64" />
                <h1 className="text-4xl text-white absolute mt-24 md:ml-64 text-center font-bold">{title}</h1>
            </div>

        </div>
    );
}
