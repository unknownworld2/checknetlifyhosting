// notistack
import { useSnackbar } from "notistack";

const ContactInformation = () => {
    const { enqueueSnackbar } = useSnackbar();

    return (
        <div>
            <div className="flex flex-col gap-4 mt-8">
                {/* Phone Number */}
                <h2 className="text-lg sm:text-lg text-gray-700 font-normal bg-gray-100 rounded-md sm:rounded-3xl py-2 px-4 font-raleway hover:underline hover:text-blue-500"
                    onClick={() => {
                        window.open("tel:+923272021111");
                    }}
                >
                    +92 327 2021111
                </h2>
                {/* Email */}
                <h2 className="text-lg sm:text-lg text-gray-700 font-normal bg-gray-100 rounded-md sm:rounded-3xl py-2 px-4 font-raleway hover:underline hover:text-blue-500"
                    onClick={() => {
                        window.open("mailto:markazsiratemustaqeem@gmail.com");
                    }}
                >
                    markazsiratemustaqeem@gmail.com
                </h2>
                {/* Address */}
                <h2 className="text-lg sm:text-lg text-green-700 font-normal bg-gray-100 rounded-md sm:rounded-3xl py-2 px-4 font-raleway"
                    onClick={() => {
                        // Save to clipboard
                        navigator.clipboard.writeText("Jalali Street , Taj Bagh phase 3 Lahore 54900 , Punjab Pakistan");
                        // Show toast
                        enqueueSnackbar("Address copied to clipboard", {
                            variant: "success",
                        });
                    }}
                >
                    Jalali Street , Taj Bagh phase 3 Lahore 54900 , Punjab Pakistan under the supervision of Kanzul Ulama Dr. Muhammad Ashraf Asif Jalali sahab
                </h2>
            </div>
        </div>
    )
}
export default ContactInformation;