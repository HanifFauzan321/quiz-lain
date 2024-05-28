function MyList(){
    return(
        <>
        <div className="Kerangka">
            <div>
                {
                    fruits.gambar.map((data) => <img key={data} src={data} />)
                    
                }
                <br />
                {
                    fruits.nama.map((data) => <p key={data}>{data}</p>)
                }
                <br />
                {
                    fruits.warna.map((data) => <p key={data}>{data}</p>)
                }
                <br />
                {
                    fruits.harga.map((data) => <p key={data}>{data}</p>)
                }

            </div>
        </div>
        </>
    )
}

const fruits = {
    id : [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8],
    nama : ["apel" , "Pisang" , "Mangga" , "Jeruk" , "Anggur" , "Semangka" , "Alpukat" , "Rambutan"],
    warna : ["merah" , "kuning" , "kuning muda" , "orange" , "ungu" , "Hijau" , "Hijau muda", "Merah"],
    harga : ["10.000" , "15.000", "30.000", "20.000" , "40.000", "50.000", "20.000", "10.000"],
    gambar : ["src/image/Apel.jpg","src/image/pisang.jpg","src/image/mangga.jpg","src/image/Jeruk.jpg","src/image/Anggur.jpg","src/image/Semangka.jpg","src/image/Alpukat.jpg","src/image/Rambutan.jpg"],
};

export default MyList;