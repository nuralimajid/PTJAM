namespace programming;
class Program
{
    static void Main(string[] args)
    {
        Console.Write("Masukan Angka : ");
        string input = int.Parse(Console.ReadLine()); // menginputkan nilai yang akan di hitung

        for (int i = 0; i < input.Length; i++) //dilakukan perulangan sejumlah panjang nilai  yang di inputkan
        {
            int didgit = input[i]; //menampung hasil nilai dari perulangan            

            int nol = input.Length - i - 1; //menghitung panjang input dan di kurang 1 untuk menghasilkan numlah nol
            int ouput = didgit * (int)Math.Pow(10, nol); // mrnghitung nilai hasil digit di kalikan dengan 10 pangakat jumlah nilai pada variabel nol

            if (ouput > 0)
            {
                Console.WriteLine(ouput); // menghasilkan nilai
            }
        }
    }
}


#region Biodata
    Nama : Nur Ali Majid
    domisili: serpong, kota tangerang selatan
    deskripsi: pengerjaan soal test nomor 4 dari file test 1 PT.JAM melalui PT MSBU
#endregion