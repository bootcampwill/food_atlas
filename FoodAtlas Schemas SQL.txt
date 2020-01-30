


CREATE TABLE "Access" (
    "FIPS" varchar  NOT NULL ,
    "County" varchar  NOT NULL ,
    "LACCESS_POP10" numeric   ,
    "LACCESS_POP15" numeric   ,
    "PCH_LACCESS_POP_10_15" numeric   ,
    "PCT_LACCESS_POP10" numeric   ,
    "PCT_LACCESS_POP15" numeric   ,
    "LACCESS_LOWI10" numeric   ,
    "LACCESS_LOWI15" numeric   ,
    "PCH_LACCESS_LOWI_10_15" numeric   ,
    "PCT_LACCESS_LOWI10" numeric   ,
    "PCT_LACCESS_LOWI15" numeric   ,
    "LACCESS_HHNV10" numeric   ,
    "LACCESS_HHNV15" numeric   ,
    "PCH_LACCESS_HHNV_10_15" numeric   ,
    "PCT_LACCESS_HHNV10" numeric   ,
    "PCT_LACCESS_HHNV15" numeric   ,
    "LACCESS_SNAP15" numeric   ,
    "PCT_LACCESS_SNAP15" numeric   ,
    "LACCESS_CHILD10" numeric   ,
    "LACCESS_CHILD15" numeric   ,
    "PCH_LACCESS_CHILD_10_15" numeric   ,
    "PCT_LACCESS_CHILD10" numeric   ,
    "PCT_LACCESS_CHILD15" numeric   ,
    "LACCESS_SENIORS10" numeric   ,
    "LACCESS_SENIORS15" numeric   ,
    "PCH_LACCESS_SENIORS_10_15" numeric   ,
    "PCT_LACCESS_SENIORS10" numeric   ,
    "PCT_LACCESS_SENIORS15" numeric   ,
    "LACCESS_WHITE15" numeric   ,
    "PCT_LACCESS_WHITE15" numeric   ,
    "LACCESS_BLACK15" numeric   ,
    "PCT_LACCESS_BLACK15" numeric   ,
    "LACCESS_HISP15" numeric   ,
    "PCT_LACCESS_HISP15" numeric   ,
    "LACCESS_NHASIAN15" numeric   ,
    "PCT_LACCESS_NHASIAN15" numeric   ,
    "LACCESS_NHNA15" numeric   ,
    "PCT_LACCESS_NHNA15" numeric   ,
    "LACCESS_NHPI15" numeric   ,
    "PCT_LACCESS_NHPI15" numeric   ,
    "LACCESS_MULTIR15" numeric   ,
    "PCT_LACCESS_MULTIR15" numeric   
);

CREATE TABLE "Assistance" (
    "FIPS" varchar  NOT NULL ,
    "County" varchar NOT NULL  ,
    "REDEMP_SNAPS12" numeric   ,
    "REDEMP_SNAPS16" numeric   ,
    "PCH_REDEMP_SNAPS_12_16" numeric   ,
    "PCT_SNAP12" numeric   ,
    "PCT_SNAP16" numeric   ,
    "PCH_SNAP_12_16" numeric   ,
    "PC_SNAPBEN10" numeric   ,
    "PC_SNAPBEN15" numeric   ,
    "PCH_PC_SNAPBEN_10_15" numeric   ,
    "SNAP_PART_RATE08" numeric   ,
    "SNAP_PART_RATE13" numeric   ,
    "SNAP_OAPP09" numeric   ,
    "SNAP_OAPP16" numeric   ,
    "SNAP_CAP09" numeric   ,
    "SNAP_CAP16" numeric   ,
    "SNAP_BBCE09" numeric   ,
    "SNAP_BBCE16" numeric   ,
    "SNAP_REPORTSIMPLE09" numeric   ,
    "SNAP_REPORTSIMPLE16" numeric   ,
    "PCT_NSLP09" numeric   ,
    "PCT_NSLP15" numeric   ,
    "PCH_NSLP_09_15" numeric   ,
    "PCT_FREE_LUNCH09" numeric   ,
    "PCT_FREE_LUNCH14" numeric   ,
    "PCT_REDUCED_LUNCH09" numeric   ,
    "PCT_REDUCED_LUNCH14" numeric   ,
    "PCT_SBP09" numeric   ,
    "PCT_SBP15" numeric   ,
    "PCH_SBP_09_15" numeric   ,
    "PCT_SFSP09" numeric   ,
    "PCT_SFSP15" numeric   ,
    "PCH_SFSP_09_15" numeric   ,
    "PC_WIC_REDEMP08" numeric   ,
    "PC_WIC_REDEMP12" numeric   ,
    "PCH_PC_WIC_REDEMP_08_12" numeric   ,
    "REDEMP_WICS08" numeric   ,
    "REDEMP_WICS12" numeric   ,
    "PCH_REDEMP_WICS_08_12" numeric   ,
    "PCT_WIC09" numeric   ,
    "PCT_WIC15" numeric   ,
    "PCH_WIC_09_15" numeric   ,
    "PCT_CACFP09" numeric   ,
    "PCT_CACFP15" numeric   ,
    "PCH_CACFP_09_15" numeric   ,
    "FDPIR12" numeric   
);

CREATE TABLE "Health" (
    "FIPS" varchar  NOT NULL ,
    "County" varchar NOT NULL  ,
    "PCT_DIABETES_ADULTS08" numeric   ,
    "PCT_DIABETES_ADULTS13" numeric   ,
    "PCT_OBESE_ADULTS08" numeric   ,
    "PCT_OBESE_ADULTS13" numeric   ,
    "PCT_HSPA15" numeric   ,
    "RECFAC09" numeric   ,
    "RECFAC14" numeric   ,
    "PCH_RECFAC_09_14" numeric   ,
    "RECFACPTH09" numeric   ,
    "RECFACPTH14" numeric   ,
    "PCH_RECFACPTH_09_14" numeric   
);

CREATE TABLE "Insecurity" (
    "FIPS" varchar  NOT NULL ,
    "County" varchar  NOT NULL ,
    "FOODINSEC_10_12" numeric   ,
    "FOODINSEC_13_15" numeric   ,
    "CH_FOODINSEC_12_15" numeric   ,
    "VLFOODSEC_10_12" numeric   ,
    "VLFOODSEC_13_15" numeric   ,
    "CH_VLFOODSEC_12_15" numeric   ,
    "FOODINSEC_CHILD_01_07" numeric   ,
    "FOODINSEC_CHILD_03_11" numeric   
);

CREATE TABLE "Local" (
    "FIPS" varchar  NOT NULL ,
    "County" varchar NOT NULL  ,
    "DIRSALES_FARMS07" numeric   ,
    "DIRSALES_FARMS12" numeric   ,
    "PCH_DIRSALES_FARMS_07_12" numeric   ,
    "PCT_LOCLFARM07" numeric   ,
    "PCT_LOCLFARM12" numeric   ,
    "PCT_LOCLSALE07" numeric   ,
    "PCT_LOCLSALE12" numeric   ,
    "DIRSALES07" numeric   ,
    "DIRSALES12" numeric   ,
    "PCH_DIRSALES_07_12" numeric   ,
    "PC_DIRSALES07" numeric   ,
    "PC_DIRSALES12" numeric   ,
    "PCH_PC_DIRSALES_07_12" numeric   ,
    "FMRKT09" numeric   ,
    "FMRKT16" numeric   ,
    "PCH_FMRKT_09_16" numeric   ,
    "FMRKTPTH09" numeric   ,
    "FMRKTPTH16" numeric   ,
    "PCH_FMRKTPTH_09_16" numeric   ,
    "FMRKT_SNAP16" numeric   ,
    "PCT_FMRKT_SNAP16" numeric   ,
    "FMRKT_WIC16" numeric   ,
    "PCT_FMRKT_WIC16" numeric   ,
    "FMRKT_WICCASH16" numeric   ,
    "PCT_FMRKT_WICCASH16" numeric   ,
    "FMRKT_SFMNP16" numeric   ,
    "PCT_FMRKT_SFMNP16" numeric   ,
    "FMRKT_CREDIT16" numeric   ,
    "PCT_FMRKT_CREDIT16" numeric   ,
    "FMRKT_FRVEG16" numeric   ,
    "PCT_FMRKT_FRVEG16" numeric   ,
    "FMRKT_ANMLPROD16" numeric   ,
    "PCT_FMRKT_ANMLPROD16" numeric   ,
    "FMRKT_BAKED16" numeric   ,
    "PCT_FMRKT_BAKED16" numeric   ,
    "FMRKT_OTHERFOOD16" numeric   ,
    "PCT_FMRKT_OTHERFOOD16" numeric   ,
    "VEG_FARMS07" numeric   ,
    "VEG_FARMS12" numeric   ,
    "PCH_VEG_FARMS_07_12" numeric   ,
    "VEG_ACRES07" numeric   ,
    "VEG_ACRES12" numeric   ,
    "PCH_VEG_ACRES_07_12" numeric   ,
    "VEG_ACRESPTH07" numeric   ,
    "VEG_ACRESPTH12" numeric   ,
    "PCH_VEG_ACRESPTH_07_12" numeric   ,
    "FRESHVEG_FARMS07" numeric   ,
    "FRESHVEG_FARMS12" numeric   ,
    "PCH_FRESHVEG_FARMS_07_12" numeric   ,
    "FRESHVEG_ACRES07" numeric   ,
    "FRESHVEG_ACRES12" numeric   ,
    "PCH_FRESHVEG_ACRES_07_12" numeric   ,
    "FRESHVEG_ACRESPTH07" numeric   ,
    "FRESHVEG_ACRESPTH12" numeric   ,
    "PCH_FRESHVEG_ACRESPTH_07_12" numeric   ,
    "ORCHARD_FARMS07" numeric   ,
    "ORCHARD_FARMS12" numeric   ,
    "PCH_ORCHARD_FARMS_07_12" numeric   ,
    "ORCHARD_ACRES07" numeric   ,
    "ORCHARD_ACRES12" numeric   ,
    "PCH_ORCHARD_ACRES_07_12" numeric   ,
    "ORCHARD_ACRESPTH07" numeric   ,
    "ORCHARD_ACRESPTH12" numeric   ,
    "PCH_ORCHARD_ACRESPTH_07_12" numeric   ,
    "BERRY_FARMS07" numeric   ,
    "BERRY_FARMS12" numeric   ,
    "PCH_BERRY_FARMS_07_12" numeric   ,
    "BERRY_ACRES07" numeric   ,
    "BERRY_ACRES12" numeric   ,
    "PCH_BERRY_ACRES_07_12" numeric   ,
    "BERRY_ACRESPTH07" numeric   ,
    "BERRY_ACRESPTH12" numeric   ,
    "PCH_BERRY_ACRESPTH_07_12" numeric   ,
    "SLHOUSE07" numeric   ,
    "SLHOUSE12" numeric   ,
    "PCH_SLHOUSE_07_12" numeric   ,
    "GHVEG_FARMS07" numeric   ,
    "GHVEG_FARMS12" numeric   ,
    "PCH_GHVEG_FARMS_07_12" numeric   ,
    "GHVEG_SQFT07" numeric   ,
    "GHVEG_SQFT12" numeric   ,
    "PCH_GHVEG_SQFT_07_12" numeric   ,
    "GHVEG_SQFTPTH07" numeric   ,
    "GHVEG_SQFTPTH12" numeric   ,
    "PCH_GHVEG_SQFTPTH_07_12" numeric   ,
    "FOODHUB16" numeric   ,
    "CSA07" numeric   ,
    "CSA12" numeric   ,
    "PCH_CSA_07_12" numeric   ,
    "AGRITRSM_OPS07" numeric   ,
    "AGRITRSM_OPS12" numeric   ,
    "PCH_AGRITRSM_OPS_07_12" numeric   ,
    "AGRITRSM_RCT07" numeric   ,
    "AGRITRSM_RCT12" numeric   ,
    "PCH_AGRITRSM_RCT_07_12" numeric   ,
    "FARM_TO_SCHOOL09" numeric   ,
    "FARM_TO_SCHOOL13" numeric   
);

CREATE TABLE "PRICES_TAXES" (
    "FIPS" varchar  NOT NULL ,
    "County" varchar  NOT NULL ,
    "MILK_PRICE10" numeric   ,
    "SODA_PRICE10" numeric   ,
    "MILK_SODA_PRICE10" numeric   ,
    "SODATAX_STORES14" numeric   ,
    "SODATAX_VENDM14" numeric   ,
    "CHIPSTAX_STORES14" numeric   ,
    "CHIPSTAX_VENDM14" numeric   ,
    "FOOD_TAX14" numeric   
);

CREATE TABLE "restaurants" (
    "FIPS" varchar  NOT NULL ,
    "County" varchar NOT NULL  ,
    "GROC09" numeric   ,
    "GROC14" numeric   ,
    "PCH_GROC_09_14" numeric   ,
    "GROCPTH09" numeric   ,
    "GROCPTH14" numeric   ,
    "PCH_GROCPTH_09_14" numeric   ,
    "SUPERC09" numeric   ,
    "SUPERC14" numeric   ,
    "PCH_SUPERC_09_14" numeric   ,
    "SUPERCPTH09" numeric   ,
    "SUPERCPTH14" numeric   ,
    "PCH_SUPERCPTH_09_14" numeric   ,
    "CONVS09" numeric   ,
    "CONVS14" numeric   ,
    "PCH_CONVS_09_14" numeric   ,
    "CONVSPTH09" numeric   ,
    "CONVSPTH14" numeric   ,
    "PCH_CONVSPTH_09_14" numeric   ,
    "SPECS09" numeric   ,
    "SPECS14" numeric   ,
    "PCH_SPECS_09_14" numeric   ,
    "SPECSPTH09" numeric   ,
    "SPECSPTH14" numeric   ,
    "PCH_SPECSPTH_09_14" numeric   ,
    "SNAPS12" numeric   ,
    "SNAPS16" numeric   ,
    "PCH_SNAPS_12_16" numeric   ,
    "SNAPSPTH12" numeric   ,
    "SNAPSPTH16" numeric   ,
    "PCH_SNAPSPTH_12_16" numeric   ,
    "WICS08" numeric   ,
    "WICS12" numeric   ,
    "PCH_WICS_08_12" numeric   ,
    "WICSPTH08" numeric   ,
    "WICSPTH12" numeric   ,
    "PCH_WICSPTH_08_12" numeric   
);

CREATE TABLE "Variables" (
    "CategoryCode" varchar   ,
    "SubcategoryName" varchar   ,
    "VariableName" varchar   ,
    "VariableCode" varchar   ,
    "Geography" varchar   ,
    "Units" varchar   
);

CREATE TABLE "county" (
    "FIPS" varchar  NOT NULL ,
    "County" varchar  NOT NULL ,
    "State" varchar   ,
    "2010CensusPopulation" int   ,
    "PopulationEstimate2011" int   ,
    "PopulationEstimate2012" int   ,
    "PopulationEstimate2013" int   ,
    "PopulationEstimate2014" int   ,
    "PopulationEstimate2015" int   ,
    "PopulationEstimate2016" int   ,
    CONSTRAINT "pk_county" PRIMARY KEY (
        "FIPS"
     )
);

);

CREATE TABLE "FIPS" (
    "FIPS" varchar  NOT NULL ,
    "County" varchar  NOT NULL ,
    "State" varchar   ,
        CONSTRAINT "pk_FIPS" PRIMARY KEY (
        "FIPS"
     )
);


ALTER TABLE "Access" ADD CONSTRAINT "fk_Access_FIPS" FOREIGN KEY("FIPS")
REFERENCES "FIPS" ("FIPS");

ALTER TABLE "Assistance" ADD CONSTRAINT "fk_Assistance_FIPS" FOREIGN KEY("FIPS")
REFERENCES "FIPS" ("FIPS");

ALTER TABLE "Health" ADD CONSTRAINT "fk_Health_FIPS" FOREIGN KEY("FIPS")
REFERENCES "FIPS" ("FIPS");

ALTER TABLE "Insecurity" ADD CONSTRAINT "fk_Insecurity_FIPS" FOREIGN KEY("FIPS")
REFERENCES "FIPS" ("FIPS");

ALTER TABLE "Local" ADD CONSTRAINT "fk_Access_Local" FOREIGN KEY("FIPS")
REFERENCES "FIPS" ("FIPS");

ALTER TABLE "PRICES_TAXES" ADD CONSTRAINT "fk_PRICES_TAXES_FIPS" FOREIGN KEY("FIPS")
REFERENCES "FIPS" ("FIPS");

ALTER TABLE "restaurants" ADD CONSTRAINT "fk_restaurants_FIPS" FOREIGN KEY("FIPS")
REFERENCES "FIPS" ("FIPS");

ALTER TABLE "county" ADD CONSTRAINT "fk_county_FIPS" FOREIGN KEY("FIPS")
REFERENCES "FIPS" ("FIPS");


