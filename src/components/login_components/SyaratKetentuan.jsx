import React from 'react'


const SyaratKetentuan = () => {
    return (
        <div >
            <div className='w-full pb-5'>
                <h1 className='bg-gradient-to-r font-semibold from-purple-900 to-white text-transparent bg-clip-text lg:text-6xl'>AI.FLIX</h1>
                <h1 className='bg-gradient-to-r font-semibold mt-2 from-purple-900 to-white text-transparent bg-clip-text lg:text-5xl pb-2'>First AI For Digital Marketing</h1>
                <p className='text-white font-thin mt-2 text-sm  lg:text-md'>Transforming Strategies, Enhancing Engagement, and Driving Growth in the Modern Era of Marketing Excellence</p>
            </div>

            <div className='border pt-2 border-[#750CE1] p-3 rounded-lg h-72 overflow-auto'>
                <TermsAndConditions />
            </div>
            <div className='mt-5'>
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-purple-600"

                    />
                    <span className="text-white text-sm ">Accept</span>
                </label>
            </div>

        </div>
    )
}
function TermsAndConditions() {
    return (
        <div className='text-sm text-white text-left'>
            <h1 className='pb-2'>Syarat dan Ketentuan Penggunaan AI Digital Marketing untuk Manajemen Layanan Pelanggan Media Sosial</h1>
            <ol>
                <li>
                    <strong>1. Tujuan Program:</strong> Program ini bertujuan untuk memberikan layanan manajemen pelanggan media sosial menggunakan kecerdasan buatan (AI) dalam konteks pemasaran digital.
                </li>
                <li>
                    <strong>2. Akses dan Penggunaan:</strong> Pengguna diberikan akses akun ke platform AI Digital Marketing untuk manajemen layanan pelanggan media sosial.
                </li>
                <li>
                    <strong>3. Kewajiban Pengguna:</strong>
                    <ul>
                        <li>Pengguna harus menggunakan platform AI Digital Marketing dengan etika dan integritas yang tinggi.</li>
                        <li>Pengguna dilarang menggunakan platform untuk tujuan yang melanggar hukum atau merugikan pihak lain.</li>
                    </ul>
                </li>
                <li>
                    <strong>4. Perlindungan Data:</strong> Kami akan menjaga kerahasiaan data pelanggan dan informasi sensitif lainnya yang diberikan oleh pengguna. Data akan digunakan secara eksklusif untuk menyediakan layanan manajemen pelanggan media sosial dan tidak akan dibagikan kepada pihak ketiga tanpa izin tertulis.
                </li>
                <li>
                    <strong>5. Tanggung Jawab Pengguna:</strong> Pengguna bertanggung jawab penuh atas konten yang dipublikasikan atau direspon melalui platform AI Digital Marketing. Pengguna harus memastikan bahwa konten yang dibagikan tidak melanggar hak cipta, privasi, atau ketentuan penggunaan media sosial yang bersangkutan.
                </li>
                <li>
                    <strong>6. Pembaruan dan Perbaikan:</strong> Kami berhak untuk melakukan pembaruan dan perbaikan pada platform AI Digital Marketing untuk meningkatkan fungsionalitas dan keamanan. Pengguna akan diberitahu tentang perubahan signifikan melalui pemberitahuan resmi.
                </li>
            </ol>
        </div>
    );
}

export default SyaratKetentuan
