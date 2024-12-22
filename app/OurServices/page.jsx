import {
  FaNursingHome,
  FaPills,
  FaUserFriends,
  FaGamepad,
  FaUsers,
  FaGraduationCap,
  FaComments,
  FaRunning,
  FaCalendarCheck,
  FaWalking,
  FaCoffee,
  FaUtensils,
  FaBus,
} from "react-icons/fa";
import { MdOutlineLocalHospital } from "react-icons/md";

const OurServices = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto text-start">
        {/* Tagline */}
        <h3 className="text-red-500 uppercase text-sm font-semibold tracking-wide mb-2">
          Professional Care Services
        </h3>

        {/* Main Heading */}
        <h1 className="lg:text-7xl text-3xl font-bold mb-4 lg:w-[80%]">
          Comprehensive care for your loved ones in a welcoming environment
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-10">
          Providing compassionate and professional care services tailored to
          enhance the quality of life for seniors.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-start">
            <MdOutlineLocalHospital className="text-red-500 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Nursing Supervision</h3>
            <p className="text-gray-500 text-sm text-start">
              24/7 professional nursing care ensuring health monitoring and
              medical assistance when needed.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-start">
            <FaPills className="text-red-500 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-xl mb-2">
              Medication Management
            </h3>
            <p className="text-gray-500 text-sm text-start">
              Careful monitoring and administration of medications according to
              prescribed schedules.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-start">
            <FaUserFriends className="text-red-500 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Social Work</h3>
            <p className="text-gray-500 text-sm text-start">
              Professional support to help residents navigate resources and
              maintain their well-being.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="flex flex-col items-start">
            <FaGamepad className="text-red-500 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-xl mb-2">
              Recreational Activities
            </h3>
            <p className="text-gray-500 text-sm text-start">
              Engaging activities designed to promote fun, creativity, and
              social interaction.
            </p>
          </div>
          {/* Feature 5 */}
          <div className="flex flex-col items-start">
            <FaUsers className="text-red-500 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-xl mb-2">
              Group & Individual Activities
            </h3>
            <p className="text-gray-500 text-sm text-start">
              Personalized and group activities tailored to interests and
              abilities.
            </p>
          </div>
          {/* Feature 6 */}
          <div className="flex flex-col items-start">
            <FaGraduationCap className="text-red-500 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Education</h3>
            <p className="text-gray-500 text-sm text-start">
              Enriching learning programs to keep minds active and engaged.
            </p>
          </div>
          {/* Feature 7 */}
          <div className="flex flex-col items-start">
            <FaComments className="text-red-500 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Counseling</h3>
            <p className="text-gray-500 text-sm text-start">
              Professional emotional support and guidance for residents and
              families.
            </p>
          </div>
          {/* Feature 8 */}
          <div className="flex flex-col items-start">
            <FaRunning className="text-red-500 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Exercise</h3>
            <p className="text-gray-500 text-sm text-start">
              Safe and appropriate physical activities to maintain strength and
              mobility.
            </p>
          </div>
          {/* Feature 9 */}
          <div className="flex flex-col items-start">
            <FaCalendarCheck className="text-red-500 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Reality Orientation</h3>
            <p className="text-gray-500 text-sm text-start">
              Daily activities to help maintain awareness of time, place, and
              person.
            </p>
          </div>
          {/* Feature 10 */}
          <div className="flex flex-col items-start">
            <FaWalking className="text-red-500 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Community Outing</h3>
            <p className="text-gray-500 text-sm text-start">
              Supervised trips to local attractions and community events.
            </p>
          </div>
          {/* Feature 11 */}
          <div className="flex flex-col items-start">
            <FaCoffee className="text-red-500 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-xl mb-2">
              Morning and Afternoon Snack
            </h3>
            <p className="text-gray-500 text-sm text-start">
              Healthy and delicious snacks provided throughout the day.
            </p>
          </div>
          {/* Feature 12 */}
          <div className="flex flex-col items-start">
            <FaUtensils className="text-red-500 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-xl mb-2">
              Hot Nutritional Lunch
            </h3>
            <p className="text-gray-500 text-sm text-start">
              Balanced, nutritious meals prepared fresh daily by our kitchen
              staff.
            </p>
          </div>
          {/* Feature 13 */}
          <div className="flex flex-col items-start">
            <FaBus className="text-red-500 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-xl mb-2">
              Transportation Provided
            </h3>
            <p className="text-gray-500 text-sm text-start">
              Safe and reliable transportation for appointments and activities.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-20 lg:max-w-md mx-auto bg-white rounded-lg shadow-lg">
        <div className="p-4">
          <div className="relative w-full pb-[177.77%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/T-XA7WpGkvQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
