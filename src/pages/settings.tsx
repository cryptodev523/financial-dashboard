import { FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchUser, updateUser, updateUserAvatar } from "../store/userSlice";
import ImageUpload from "../utils/imageUpload";

interface FormData {
  name: string;
  username: string;
  email: string;
  password: string;
  dateOfBirth: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

interface FormErrors {
  [key: string]: string;
}
interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab = ({ label, isActive, onClick }: TabProps) => (
  <button
    onClick={onClick}
    className={`pb-2 px-1 text-xs lg:text-base ${
      isActive
        ? "text-primary-500 border-b-2 border-primary-500 font-semibold"
        : "text-gray-500 hover:text-primary-500"
    }`}
  >
    {label}
  </button>
);

export default function Settings() {
  const dispatch = useAppDispatch();
  const { data: user, loading } = useAppSelector((state) => state.user);

  const [activeTab, setActiveTab] = useState("Edit Profile");
  const tabs = ["Edit Profile", "Preferences", "Security"];

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        username: user.username || "",
        email: user.email || "",
        password: "", // Keep password empty
        dateOfBirth: user.dateOfBirth || "",
        address: user.address || "",
        city: user.city || "",
        postalCode: user.postalCode || "",
        country: user.country || "",
      });
    }
  }, [user]);

  const [formData, setFormData] = useState<FormData>({
    name: user?.name || "",
    username: user?.name || "",
    email: user?.email || "",
    password: "",
    dateOfBirth: user?.dateOfBirth || "",
    address: user?.address || "",
    city: user?.city || "",
    postalCode: user?.postalCode || "",
    country: user?.country || "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleImageChange = async (file: File) => {
    try {
      await dispatch(updateUserAvatar(file)).unwrap();
    } catch (error) {
      console.error("Failed to update avatar:", error);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Password validation (only if changed)
    if (formData.password) {
      if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      } else if (!/(?=.*[A-Z])/.test(formData.password)) {
        newErrors.password =
          "Password must contain at least one uppercase letter";
      } else if (!/(?=.*[0-9])/.test(formData.password)) {
        newErrors.password = "Password must contain at least one number";
      }
    }

    // Postal code validation
    const postalCodeRegex = /^\d{5}(-\d{4})?$/;
    if (formData.postalCode && !postalCodeRegex.test(formData.postalCode)) {
      newErrors.postalCode =
        "Invalid postal code format (e.g., 12345 or 12345-6789)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      // Include the current avatar URL in the update
      await dispatch(
        updateUser({
          ...formData,
          avatar: user?.avatar || "",
        })
      ).unwrap();
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-4 md:p-6 shadow-sm">
      <div className="space-x-4 md:space-x-8 border-b border-gray-200 mb-6 md:mb-8 overflow-x-auto whitespace-nowrap">
        {tabs.map((tab) => (
          <Tab
            key={tab}
            label={tab}
            isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>

      {activeTab === "Edit Profile" && (
        <div className="flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8">
          <div className="w-full md:col-span-3 flex justify-center md:block">
            <ImageUpload
              currentImage={user?.avatar}
              onImageChange={handleImageChange}
            />
          </div>

          <form onSubmit={handleSubmit} className="w-full md:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  User Name
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth
                </label>
                <input
                  type="text"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Present Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Permanent Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Postal Code
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
                {errors.postalCode && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.postalCode}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
              </div>

              <div className="col-span-1 md:col-span-2 flex justify-end mt-4">
                <button className="w-full md:w-auto px-8 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
