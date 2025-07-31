import { PERSONA, USER_ROLE } from "enums/user.enum"

export interface IUserBasic {
  id: string | null
  first_name: string | null
  last_name: string | null
  email: string | null
  is_admin: boolean
  dp_url: string | null
  cover_image_url: string | null
  is_disabled: boolean
  is_verified: boolean
  is_secured: boolean
  is_authorized: boolean
  is_publisher?: boolean
  is_publisher_approved: boolean
  is_publisher_blocked?: boolean
  is_user_ban?: boolean
  is_user_blocked?: boolean
  user_ban_reason?: boolean
  publisher_ban_reason?: string
  user_blocked_reason?: boolean
  publisher_blocked_reason?: boolean
  about: string | null
  two_factor_auth_enable: boolean
  is_kba_enabled: boolean
  display_name: string | null
  bio?: string | null
  tooltip: boolean
  timezone_value: string | null
  timezone_locale: string | null
  timezone: number | null
  avatar_id: string | null
  isOrganization: boolean
  website_url: string | null
  twitter_url: string | null
  company_detail_added?: boolean
  discord_url: string | null
  instagram_url: string | null
  applied_for_publisher: boolean
  logged_in_as?: USER_ROLE
  company_details?: ICompanyDetails
  joined_as_publisher_on?: string
  joined_as_user_on?: string
  roles?: USER_ROLE[]
  is_publisher_ban?: boolean
}

export interface IProfile {
  user: IUserBasic
  social: {
    user_id: string | null
    instagram_profile: string | null
    discord_profile: string | null
    twitter_profile: string | null
    website: string | null
    youtube: string | null
  }
}

export interface ICompanyDetails {
  company_name: string
  suffix: string
  website?: string
  about?: string
  image?: string
  company_id?: string
  company_metaphone?: string
  created_at?: string
  created_by?: string
  id?: string
  modified_at?: string
  org_type?: PERSONA
  parent_id?: string
}
