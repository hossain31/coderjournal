// FacebookSection.cs
// Facebook/FrameworkWeb/Web
// Copyright (c) 2007, Nikhil Kothari. All Rights Reserved.
//

using System;
using System.Configuration;
using System.Diagnostics;
using System.Web.Configuration;

namespace Facebook.Web.Configuration {

    /// <summary>
    /// Represents the Facebook configuration section which contains settings for
    /// Facebook applications.
    /// </summary>
    public sealed class FacebookSection : ConfigurationSection {

        private static readonly ConfigurationProperty ApplicationsProperty =
            new ConfigurationProperty("", typeof(FacebookApplicationSettingsCollection), null,
                                      ConfigurationPropertyOptions.IsDefaultCollection);

        private static ConfigurationPropertyCollection AllProperties = BuildProperties();

        private static FacebookSection SectionInstance;

        /// <summary>
        /// The list of applications defined in configuration.
        /// </summary>
        [ConfigurationProperty("", IsDefaultCollection = true)]
        public FacebookApplicationSettingsCollection Applications {
            get {
                return (FacebookApplicationSettingsCollection)base[ApplicationsProperty];
            }
        }

        /// <internalonly />
        protected override ConfigurationPropertyCollection Properties {
            get {
                return AllProperties;
            }
        }

        private static ConfigurationPropertyCollection BuildProperties() {
            ConfigurationPropertyCollection props = new ConfigurationPropertyCollection();
            props.Add(ApplicationsProperty);
            return props;
        }

        private static void EnsureSection() {
            if (SectionInstance == null) {
                SectionInstance = (FacebookSection)WebConfigurationManager.GetSection("facebook");
                if (SectionInstance == null) {
                    SectionInstance = new FacebookSection();
                }
            }
        }

		/// <summary>
		/// Gets the application.
		/// </summary>
		/// <param name="name">The name.</param>
		/// <returns></returns>
        public static FacebookApplicationSettings GetApplication(string name) {
            EnsureSection();
            return SectionInstance.Applications[name];
        }

        internal static FacebookApplicationSettingsCollection GetApplications() {
            EnsureSection();
            return SectionInstance.Applications;
        }
    }
}
