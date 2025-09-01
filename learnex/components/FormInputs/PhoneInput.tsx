import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Select from "react-tailwindcss-select";
import { CircleHelp } from "lucide-react";

// Countries data with phone codes, currency codes, and flags
const countries = [
  { value: "IN", label: "🇮🇳 India", phoneCode: "+91", currencyCode: "INR" },
  { value: "US", label: "🇺🇸 United States", phoneCode: "+1", currencyCode: "USD" },
  { value: "GB", label: "🇬🇧 United Kingdom", phoneCode: "+44", currencyCode: "GBP" },
  { value: "CA", label: "🇨🇦 Canada", phoneCode: "+1", currencyCode: "CAD" },
  { value: "AU", label: "🇦🇺 Australia", phoneCode: "+61", currencyCode: "AUD" },
  { value: "DE", label: "🇩🇪 Germany", phoneCode: "+49", currencyCode: "EUR" },
  { value: "FR", label: "🇫🇷 France", phoneCode: "+33", currencyCode: "EUR" },
  { value: "IT", label: "🇮🇹 Italy", phoneCode: "+39", currencyCode: "EUR" },
  { value: "ES", label: "🇪🇸 Spain", phoneCode: "+34", currencyCode: "EUR" },
  { value: "NL", label: "🇳🇱 Netherlands", phoneCode: "+31", currencyCode: "EUR" },
  { value: "BE", label: "🇧🇪 Belgium", phoneCode: "+32", currencyCode: "EUR" },
  { value: "CH", label: "🇨🇭 Switzerland", phoneCode: "+41", currencyCode: "CHF" },
  { value: "AT", label: "🇦🇹 Austria", phoneCode: "+43", currencyCode: "EUR" },
  { value: "SE", label: "🇸🇪 Sweden", phoneCode: "+46", currencyCode: "SEK" },
  { value: "NO", label: "🇳🇴 Norway", phoneCode: "+47", currencyCode: "NOK" },
  { value: "DK", label: "🇩🇰 Denmark", phoneCode: "+45", currencyCode: "DKK" },
  { value: "FI", label: "🇫🇮 Finland", phoneCode: "+358", currencyCode: "EUR" },
  { value: "PL", label: "🇵🇱 Poland", phoneCode: "+48", currencyCode: "PLN" },
  { value: "CZ", label: "🇨🇿 Czech Republic", phoneCode: "+420", currencyCode: "CZK" },
  { value: "HU", label: "🇭🇺 Hungary", phoneCode: "+36", currencyCode: "HUF" },
  { value: "RO", label: "🇷🇴 Romania", phoneCode: "+40", currencyCode: "RON" },
  { value: "BG", label: "🇧🇬 Bulgaria", phoneCode: "+359", currencyCode: "BGN" },
  { value: "HR", label: "🇭🇷 Croatia", phoneCode: "+385", currencyCode: "EUR" },
  { value: "SI", label: "🇸🇮 Slovenia", phoneCode: "+386", currencyCode: "EUR" },
  { value: "SK", label: "🇸🇰 Slovakia", phoneCode: "+421", currencyCode: "EUR" },
  { value: "LT", label: "🇱🇹 Lithuania", phoneCode: "+370", currencyCode: "EUR" },
  { value: "LV", label: "🇱🇻 Latvia", phoneCode: "+371", currencyCode: "EUR" },
  { value: "EE", label: "🇪🇪 Estonia", phoneCode: "+372", currencyCode: "EUR" },
  { value: "IE", label: "🇮🇪 Ireland", phoneCode: "+353", currencyCode: "EUR" },
  { value: "PT", label: "🇵🇹 Portugal", phoneCode: "+351", currencyCode: "EUR" },
  { value: "GR", label: "🇬🇷 Greece", phoneCode: "+30", currencyCode: "EUR" },
  { value: "CY", label: "🇨🇾 Cyprus", phoneCode: "+357", currencyCode: "EUR" },
  { value: "MT", label: "🇲🇹 Malta", phoneCode: "+356", currencyCode: "EUR" },
  { value: "LU", label: "🇱🇺 Luxembourg", phoneCode: "+352", currencyCode: "EUR" },
  { value: "IS", label: "🇮🇸 Iceland", phoneCode: "+354", currencyCode: "ISK" },
  { value: "JP", label: "🇯🇵 Japan", phoneCode: "+81", currencyCode: "JPY" },
  { value: "KR", label: "🇰🇷 South Korea", phoneCode: "+82", currencyCode: "KRW" },
  { value: "CN", label: "🇨🇳 China", phoneCode: "+86", currencyCode: "CNY" },
  { value: "IN", label: "🇮🇳 India", phoneCode: "+91", currencyCode: "INR" },
  { value: "SG", label: "🇸🇬 Singapore", phoneCode: "+65", currencyCode: "SGD" },
  { value: "HK", label: "🇭🇰 Hong Kong", phoneCode: "+852", currencyCode: "HKD" },
  { value: "TW", label: "🇹🇼 Taiwan", phoneCode: "+886", currencyCode: "TWD" },
  { value: "TH", label: "🇹🇭 Thailand", phoneCode: "+66", currencyCode: "THB" },
  { value: "MY", label: "🇲🇾 Malaysia", phoneCode: "+60", currencyCode: "MYR" },
  { value: "ID", label: "🇮🇩 Indonesia", phoneCode: "+62", currencyCode: "IDR" },
  { value: "PH", label: "🇵🇭 Philippines", phoneCode: "+63", currencyCode: "PHP" },
  { value: "VN", label: "🇻🇳 Vietnam", phoneCode: "+84", currencyCode: "VND" },
  { value: "NZ", label: "🇳🇿 New Zealand", phoneCode: "+64", currencyCode: "NZD" },
  { value: "ZA", label: "🇿🇦 South Africa", phoneCode: "+27", currencyCode: "ZAR" },
  { value: "BR", label: "🇧🇷 Brazil", phoneCode: "+55", currencyCode: "BRL" },
  { value: "MX", label: "🇲🇽 Mexico", phoneCode: "+52", currencyCode: "MXN" },
  { value: "AR", label: "🇦🇷 Argentina", phoneCode: "+54", currencyCode: "ARS" },
  { value: "CL", label: "🇨🇱 Chile", phoneCode: "+56", currencyCode: "CLP" },
  { value: "CO", label: "🇨🇴 Colombia", phoneCode: "+57", currencyCode: "COP" },
  { value: "PE", label: "🇵🇪 Peru", phoneCode: "+51", currencyCode: "PEN" },
  { value: "VE", label: "🇻🇪 Venezuela", phoneCode: "+58", currencyCode: "VES" },
  { value: "UY", label: "🇺🇾 Uruguay", phoneCode: "+598", currencyCode: "UYU" },
  { value: "PY", label: "🇵🇾 Paraguay", phoneCode: "+595", currencyCode: "PYG" },
  { value: "BO", label: "🇧🇴 Bolivia", phoneCode: "+591", currencyCode: "BOB" },
  { value: "EC", label: "🇪🇨 Ecuador", phoneCode: "+593", currencyCode: "USD" },
  { value: "RU", label: "🇷🇺 Russia", phoneCode: "+7", currencyCode: "RUB" },
  { value: "TR", label: "🇹🇷 Turkey", phoneCode: "+90", currencyCode: "TRY" },
  { value: "AE", label: "🇦🇪 UAE", phoneCode: "+971", currencyCode: "AED" },
  { value: "SA", label: "🇸🇦 Saudi Arabia", phoneCode: "+966", currencyCode: "SAR" },
  { value: "IL", label: "🇮🇱 Israel", phoneCode: "+972", currencyCode: "ILS" },
  { value: "EG", label: "🇪🇬 Egypt", phoneCode: "+20", currencyCode: "EGP" },
  { value: "NG", label: "🇳🇬 Nigeria", phoneCode: "+234", currencyCode: "NGN" },
  { value: "KE", label: "🇰🇪 Kenya", phoneCode: "+254", currencyCode: "KES" },
  { value: "GH", label: "🇬🇭 Ghana", phoneCode: "+233", currencyCode: "GHS" },
  { value: "MA", label: "🇲🇦 Morocco", phoneCode: "+212", currencyCode: "MAD" },
  { value: "TN", label: "🇹🇳 Tunisia", phoneCode: "+216", currencyCode: "TND" },
  { value: "DZ", label: "🇩🇿 Algeria", phoneCode: "+213", currencyCode: "DZD" },
  { value: "LY", label: "🇱🇾 Libya", phoneCode: "+218", currencyCode: "LYD" },
  { value: "SD", label: "🇸🇩 Sudan", phoneCode: "+249", currencyCode: "SDG" },
  { value: "ET", label: "🇪🇹 Ethiopia", phoneCode: "+251", currencyCode: "ETB" },
  { value: "UG", label: "🇺🇬 Uganda", phoneCode: "+256", currencyCode: "UGX" },
  { value: "TZ", label: "🇹🇿 Tanzania", phoneCode: "+255", currencyCode: "TZS" },
  { value: "RW", label: "🇷🇼 Rwanda", phoneCode: "+250", currencyCode: "RWF" },
  { value: "ZM", label: "🇿🇲 Zambia", phoneCode: "+260", currencyCode: "ZMW" },
  { value: "ZW", label: "🇿🇼 Zimbabwe", phoneCode: "+263", currencyCode: "ZWL" },
  { value: "BW", label: "🇧🇼 Botswana", phoneCode: "+267", currencyCode: "BWP" },
  { value: "NA", label: "🇳🇦 Namibia", phoneCode: "+264", currencyCode: "NAD" },
  { value: "SZ", label: "🇸🇿 Eswatini", phoneCode: "+268", currencyCode: "SZL" },
  { value: "LS", label: "🇱🇸 Lesotho", phoneCode: "+266", currencyCode: "LSL" },
  { value: "MZ", label: "🇲🇿 Mozambique", phoneCode: "+258", currencyCode: "MZN" },
  { value: "MW", label: "🇲🇼 Malawi", phoneCode: "+265", currencyCode: "MWK" },
  { value: "AO", label: "🇦🇴 Angola", phoneCode: "+244", currencyCode: "AOA" },
  { value: "CM", label: "🇨🇲 Cameroon", phoneCode: "+237", currencyCode: "XAF" },
  { value: "TD", label: "🇹🇩 Chad", phoneCode: "+235", currencyCode: "XAF" },
  { value: "CF", label: "🇨🇫 Central African Republic", phoneCode: "+236", currencyCode: "XAF" },
  { value: "CG", label: "🇨🇬 Republic of Congo", phoneCode: "+242", currencyCode: "XAF" },
  { value: "CD", label: "🇨🇩 Democratic Republic of Congo", phoneCode: "+243", currencyCode: "CDF" },
  { value: "GA", label: "🇬🇦 Gabon", phoneCode: "+241", currencyCode: "XAF" },
  { value: "GQ", label: "🇬🇶 Equatorial Guinea", phoneCode: "+240", currencyCode: "XAF" },
  { value: "ST", label: "🇸🇹 São Tomé and Príncipe", phoneCode: "+239", currencyCode: "STN" },
  { value: "SN", label: "🇸🇳 Senegal", phoneCode: "+221", currencyCode: "XOF" },
  { value: "GM", label: "🇬🇲 Gambia", phoneCode: "+220", currencyCode: "GMD" },
  { value: "GW", label: "🇬🇼 Guinea-Bissau", phoneCode: "+245", currencyCode: "XOF" },
  { value: "GN", label: "🇬🇳 Guinea", phoneCode: "+224", currencyCode: "GNF" },
  { value: "SL", label: "🇸🇱 Sierra Leone", phoneCode: "+232", currencyCode: "SLE" },
  { value: "LR", label: "🇱🇷 Liberia", phoneCode: "+231", currencyCode: "LRD" },
  { value: "CI", label: "🇨🇮 Côte d'Ivoire", phoneCode: "+225", currencyCode: "XOF" },
  { value: "BF", label: "🇧🇫 Burkina Faso", phoneCode: "+226", currencyCode: "XOF" },
  { value: "ML", label: "🇲🇱 Mali", phoneCode: "+223", currencyCode: "XOF" },
  { value: "NE", label: "🇳🇪 Niger", phoneCode: "+227", currencyCode: "XOF" },
  { value: "TG", label: "🇹🇬 Togo", phoneCode: "+228", currencyCode: "XOF" },
  { value: "BJ", label: "🇧🇯 Benin", phoneCode: "+229", currencyCode: "XOF" },
  { value: "MR", label: "🇲🇷 Mauritania", phoneCode: "+222", currencyCode: "MRU" },
  { value: "CV", label: "🇨🇻 Cape Verde", phoneCode: "+238", currencyCode: "CVE" },
  { value: "DJ", label: "🇩🇯 Djibouti", phoneCode: "+253", currencyCode: "DJF" },
  { value: "SO", label: "🇸🇴 Somalia", phoneCode: "+252", currencyCode: "SOS" },
  { value: "ER", label: "🇪🇷 Eritrea", phoneCode: "+291", currencyCode: "ERN" },
  { value: "SS", label: "🇸🇸 South Sudan", phoneCode: "+211", currencyCode: "SSP" },
  { value: "MG", label: "🇲🇬 Madagascar", phoneCode: "+261", currencyCode: "MGA" },
  { value: "MU", label: "🇲🇺 Mauritius", phoneCode: "+230", currencyCode: "MUR" },
  { value: "SC", label: "🇸🇨 Seychelles", phoneCode: "+248", currencyCode: "SCR" },
  { value: "KM", label: "🇰🇲 Comoros", phoneCode: "+269", currencyCode: "KMF" },
  { value: "PK", label: "🇵🇰 Pakistan", phoneCode: "+92", currencyCode: "PKR" },
  { value: "BD", label: "🇧🇩 Bangladesh", phoneCode: "+880", currencyCode: "BDT" },
  { value: "LK", label: "🇱🇰 Sri Lanka", phoneCode: "+94", currencyCode: "LKR" },
  { value: "MV", label: "🇲🇻 Maldives", phoneCode: "+960", currencyCode: "MVR" },
  { value: "NP", label: "🇳🇵 Nepal", phoneCode: "+977", currencyCode: "NPR" },
  { value: "BT", label: "🇧🇹 Bhutan", phoneCode: "+975", currencyCode: "BTN" },
  { value: "AF", label: "🇦🇫 Afghanistan", phoneCode: "+93", currencyCode: "AFN" },
  { value: "IR", label: "🇮🇷 Iran", phoneCode: "+98", currencyCode: "IRR" },
  { value: "IQ", label: "🇮🇶 Iraq", phoneCode: "+964", currencyCode: "IQD" },
  { value: "SY", label: "🇸🇾 Syria", phoneCode: "+963", currencyCode: "SYP" },
  { value: "LB", label: "🇱🇧 Lebanon", phoneCode: "+961", currencyCode: "LBP" },
  { value: "JO", label: "🇯🇴 Jordan", phoneCode: "+962", currencyCode: "JOD" },
  { value: "PS", label: "🇵🇸 Palestine", phoneCode: "+970", currencyCode: "ILS" },
  { value: "KW", label: "🇰🇼 Kuwait", phoneCode: "+965", currencyCode: "KWD" },
  { value: "BH", label: "🇧🇭 Bahrain", phoneCode: "+973", currencyCode: "BHD" },
  { value: "QA", label: "🇶🇦 Qatar", phoneCode: "+974", currencyCode: "QAR" },
  { value: "OM", label: "🇴🇲 Oman", phoneCode: "+968", currencyCode: "OMR" },
  { value: "YE", label: "🇾🇪 Yemen", phoneCode: "+967", currencyCode: "YER" },
  { value: "UZ", label: "🇺🇿 Uzbekistan", phoneCode: "+998", currencyCode: "UZS" },
  { value: "KZ", label: "🇰🇿 Kazakhstan", phoneCode: "+7", currencyCode: "KZT" },
  { value: "KG", label: "🇰🇬 Kyrgyzstan", phoneCode: "+996", currencyCode: "KGS" },
  { value: "TJ", label: "🇹🇯 Tajikistan", phoneCode: "+992", currencyCode: "TJS" },
  { value: "TM", label: "🇹🇲 Turkmenistan", phoneCode: "+993", currencyCode: "TMT" },
  { value: "MN", label: "🇲🇳 Mongolia", phoneCode: "+976", currencyCode: "MNT" },
  { value: "MM", label: "🇲🇲 Myanmar", phoneCode: "+95", currencyCode: "MMK" },
  { value: "LA", label: "🇱🇦 Laos", phoneCode: "+856", currencyCode: "LAK" },
  { value: "KH", label: "🇰🇭 Cambodia", phoneCode: "+855", currencyCode: "KHR" },
  { value: "BN", label: "🇧🇳 Brunei", phoneCode: "+673", currencyCode: "BND" },
  { value: "TL", label: "🇹🇱 Timor-Leste", phoneCode: "+670", currencyCode: "USD" },
  { value: "FJ", label: "🇫🇯 Fiji", phoneCode: "+679", currencyCode: "FJD" },
  { value: "PG", label: "🇵🇬 Papua New Guinea", phoneCode: "+675", currencyCode: "PGK" },
  { value: "SB", label: "🇸🇧 Solomon Islands", phoneCode: "+677", currencyCode: "SBD" },
  { value: "VU", label: "🇻🇺 Vanuatu", phoneCode: "+678", currencyCode: "VUV" },
  { value: "NC", label: "🇳🇨 New Caledonia", phoneCode: "+687", currencyCode: "XPF" },
  { value: "PF", label: "🇵🇫 French Polynesia", phoneCode: "+689", currencyCode: "XPF" },
  { value: "TO", label: "🇹🇴 Tonga", phoneCode: "+676", currencyCode: "TOP" },
  { value: "WS", label: "🇼🇸 Samoa", phoneCode: "+685", currencyCode: "WST" },
  { value: "KI", label: "🇰🇮 Kiribati", phoneCode: "+686", currencyCode: "AUD" },
  { value: "TV", label: "🇹🇻 Tuvalu", phoneCode: "+688", currencyCode: "AUD" },
  { value: "NR", label: "🇳🇷 Nauru", phoneCode: "+674", currencyCode: "AUD" },
  { value: "PW", label: "🇵🇼 Palau", phoneCode: "+680", currencyCode: "USD" },
  { value: "FM", label: "🇫🇲 Micronesia", phoneCode: "+691", currencyCode: "USD" },
  { value: "MH", label: "🇲🇭 Marshall Islands", phoneCode: "+692", currencyCode: "USD" },
];

// Top 5 most popular countries for quick access
const popularCountries = [
  countries.find(c => c.value === "IN"),
  countries.find(c => c.value === "US"),
  countries.find(c => c.value === "GB"),
  countries.find(c => c.value === "CA"),
  countries.find(c => c.value === "AU"),
].filter(Boolean);

type PhoneInputProps = {
  register: any;
  errors: any;
  label: string;
  type?: string;
  name: string;
  toolTipText?: string;
  unit?: string;
  placeholder?: string;
  icon?: any;
  setValue?: any; // For react-hook-form setValue function
  defaultCountry?: string; // Default country code (e.g., "IN")
};

export default function PhoneInput({
  register,
  errors,
  label,
  type = "tel",
  name,
  toolTipText,
  unit,
  icon,
  placeholder,
  setValue,
  defaultCountry = "IN",
}: PhoneInputProps) {
  const Icon = icon;
  const [selectedCountry, setSelectedCountry] = useState(() => 
    countries.find(c => c.value === defaultCountry) || countries[0]
  );
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Update the complete phone number when country or phone number changes
  useEffect(() => {
    if (setValue && selectedCountry) {
      const cleanNumber = phoneNumber.replace(/\D/g, ""); // Remove non-digits
      const fullNumber = cleanNumber ? `${selectedCountry.phoneCode}${cleanNumber}` : "";
      setValue(name, fullNumber);
    }
  }, [selectedCountry, phoneNumber, setValue, name]);

  const handleCountryChange = (value: any) => {
    const country = countries.find(c => c.value === value.value);
    if (country) {
      setSelectedCountry(country);
      setIsDropdownOpen(false);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    // Remove the country code if user tries to type it
    if (selectedCountry && value.startsWith(selectedCountry.phoneCode)) {
      value = value.substring(selectedCountry.phoneCode.length);
    }
    
    // Only allow digits, spaces, dashes, and parentheses
    const cleanValue = value.replace(/[^\d\s\-\(\)]/g, "");
    setPhoneNumber(cleanValue);
  };

  const getCountryName = (label: string) => {
    return label.substring(3); // Remove flag emoji and space
  };

  const getFlag = (label: string) => {
    return label.split(' ')[0]; // Get just the flag emoji
  };

  return (
    <div>
      <div className="flex space-x-2 items-center">
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        {toolTipText && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button type="button">
                  <CircleHelp className="w-4 h-4 text-slate-500" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{toolTipText}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className="mt-2">
        <div className="relative">
          {/* Single Input Box with Country Info and Phone Number */}
          <div className="relative">
            {/* Country Selector Button */}
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="absolute inset-y-0 left-0 flex items-center pl-3 pr-2 border-r border-gray-300 bg-gray-50 hover:bg-gray-100 rounded-l-md transition-colors z-20"
              style={{ width: 'auto', minWidth: '120px' }}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{getFlag(selectedCountry.label)}</span>
                <span className="text-sm text-gray-700 font-medium">
                  {getCountryName(selectedCountry.label).length > 12 
                    ? getCountryName(selectedCountry.label).substring(0, 12) + '...'
                    : getCountryName(selectedCountry.label)
                  }
                </span>
                <span className="text-sm text-gray-600 font-mono">
                  {selectedCountry.phoneCode}
                </span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {icon && (
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 z-10">
                <Icon className="text-slate-300 w-4 h-4" />
              </div>
            )}

            <input
              id={name}
              type={type}
              value={phoneNumber}
              onChange={handlePhoneChange}
              {...register(name, { required: true })}
              className={cn(
                "block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6",
                errors[name] && "focus:ring-red-500",
                icon && "pr-10"
              )}
              style={{ paddingLeft: '180px' }}
              placeholder={placeholder || "Enter phone number"}
            />

            {unit && (
              <p className="bg-white py-2 px-3 rounded-tr-md rounded-br-md absolute inset-y-0 right-1 my-[2px] flex items-center">
                {unit}
              </p>
            )}
          </div>

          {/* Custom Dropdown */}
          {isDropdownOpen && (
            <div className="absolute z-30 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
              <div className="flex">
                {/* Main Country List */}
                <div className="flex-1">
                  <div className="p-3">
                    <h4 className="text-xs font-semibold text-gray-700 uppercase mb-2">All Countries</h4>
                    <div className="max-h-60 overflow-y-auto">
                      <div className="space-y-1">
                        {countries.map((country) => (
                          <button
                            key={country.value}
                            type="button"
                            onClick={() => handleCountryChange({ value: country.value })}
                            className={cn(
                              "w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded flex items-center justify-between",
                              selectedCountry?.value === country.value && "bg-blue-50 text-blue-700"
                            )}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-base">{getFlag(country.label)}</span>
                              <span className="text-sm text-gray-700">
                                {getCountryName(country.label)}
                              </span>
                            </div>
                            <span className="text-sm text-gray-500 font-mono">
                              {country.phoneCode}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Click outside handler */}
          {isDropdownOpen && (
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsDropdownOpen(false)}
            />
          )}
        </div>
        
        {/* Display the complete phone number */}
        {selectedCountry && phoneNumber && (
          <div className="mt-1 text-xs text-gray-600">
            Complete number: {selectedCountry.phoneCode}{phoneNumber.replace(/\D/g, "")}
          </div>
        )}

        {errors[name] && (
          <span className="text-xs text-red-600">{label} is required</span>
        )}
      </div>
    </div>
  );
}