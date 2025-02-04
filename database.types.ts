export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      avatar: {
        Row: {
          avatar_id: string
          created_at: string
          picture: string | null
          picture_description: string | null
        }
        Insert: {
          avatar_id?: string
          created_at?: string
          picture?: string | null
          picture_description?: string | null
        }
        Update: {
          avatar_id?: string
          created_at?: string
          picture?: string | null
          picture_description?: string | null
        }
        Relationships: []
      }
      celebration: {
        Row: {
          address: string | null
          author: string
          celebration_id: string
          celebration_type: string | null
          created_at: string
          date: string | null
          description: string | null
          hour: string | null
          name: string | null
        }
        Insert: {
          address?: string | null
          author: string
          celebration_id?: string
          celebration_type?: string | null
          created_at?: string
          date?: string | null
          description?: string | null
          hour?: string | null
          name?: string | null
        }
        Update: {
          address?: string | null
          author?: string
          celebration_id?: string
          celebration_type?: string | null
          created_at?: string
          date?: string | null
          description?: string | null
          hour?: string | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'celebration_author_fkey'
            columns: ['author']
            isOneToOne: false
            referencedRelation: 'user'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'celebration_celebration_type_fkey'
            columns: ['celebration_type']
            isOneToOne: false
            referencedRelation: 'celebration_type'
            referencedColumns: ['celebration_type_id']
          },
        ]
      }
      celebration_type: {
        Row: {
          category: string | null
          celebration_type_id: string
          created_at: string
          picture: string | null
        }
        Insert: {
          category?: string | null
          celebration_type_id?: string
          created_at?: string
          picture?: string | null
        }
        Update: {
          category?: string | null
          celebration_type_id?: string
          created_at?: string
          picture?: string | null
        }
        Relationships: []
      }
      guest: {
        Row: {
          celebration_id: string
          created_at: string
          guest_id: string
          is_coming: boolean | null
          user_id: string
        }
        Insert: {
          celebration_id: string
          created_at?: string
          guest_id?: string
          is_coming?: boolean | null
          user_id: string
        }
        Update: {
          celebration_id?: string
          created_at?: string
          guest_id?: string
          is_coming?: boolean | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'guest_celebration_id_fkey'
            columns: ['celebration_id']
            isOneToOne: false
            referencedRelation: 'celebration'
            referencedColumns: ['celebration_id']
          },
          {
            foreignKeyName: 'guest_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'user'
            referencedColumns: ['user_id']
          },
        ]
      }
      user: {
        Row: {
          alias: string | null
          avatar: string | null
          created_at: string
          email: string | null
          has_celery_allergy: boolean | null
          has_crustaceans_allergy: boolean | null
          has_eggs_allergy: boolean | null
          has_fish_allergy: boolean | null
          has_gluten_allergy: boolean | null
          has_lupin_allergy: boolean | null
          has_milk_allergy: boolean | null
          has_mustard_allergy: boolean | null
          has_nuts_allergy: boolean | null
          has_peanuts_allergy: boolean | null
          has_sellfish_allergy: boolean | null
          has_sesame_allergy: boolean | null
          has_soy_allergy: boolean | null
          has_sulfite_allergy: boolean | null
          is_frugivore: boolean | null
          is_l_o_vegetarian: boolean | null
          is_l_vegetarian: boolean | null
          is_o_vegetarian: boolean | null
          is_pescetarian: boolean | null
          is_rawfoodist: boolean | null
          is_vegan: boolean | null
          is_vegetalien: boolean | null
          user_id: string
        }
        Insert: {
          alias?: string | null
          avatar?: string | null
          created_at?: string
          email?: string | null
          has_celery_allergy?: boolean | null
          has_crustaceans_allergy?: boolean | null
          has_eggs_allergy?: boolean | null
          has_fish_allergy?: boolean | null
          has_gluten_allergy?: boolean | null
          has_lupin_allergy?: boolean | null
          has_milk_allergy?: boolean | null
          has_mustard_allergy?: boolean | null
          has_nuts_allergy?: boolean | null
          has_peanuts_allergy?: boolean | null
          has_sellfish_allergy?: boolean | null
          has_sesame_allergy?: boolean | null
          has_soy_allergy?: boolean | null
          has_sulfite_allergy?: boolean | null
          is_frugivore?: boolean | null
          is_l_o_vegetarian?: boolean | null
          is_l_vegetarian?: boolean | null
          is_o_vegetarian?: boolean | null
          is_pescetarian?: boolean | null
          is_rawfoodist?: boolean | null
          is_vegan?: boolean | null
          is_vegetalien?: boolean | null
          user_id: string
        }
        Update: {
          alias?: string | null
          avatar?: string | null
          created_at?: string
          email?: string | null
          has_celery_allergy?: boolean | null
          has_crustaceans_allergy?: boolean | null
          has_eggs_allergy?: boolean | null
          has_fish_allergy?: boolean | null
          has_gluten_allergy?: boolean | null
          has_lupin_allergy?: boolean | null
          has_milk_allergy?: boolean | null
          has_mustard_allergy?: boolean | null
          has_nuts_allergy?: boolean | null
          has_peanuts_allergy?: boolean | null
          has_sellfish_allergy?: boolean | null
          has_sesame_allergy?: boolean | null
          has_soy_allergy?: boolean | null
          has_sulfite_allergy?: boolean | null
          is_frugivore?: boolean | null
          is_l_o_vegetarian?: boolean | null
          is_l_vegetarian?: boolean | null
          is_o_vegetarian?: boolean | null
          is_pescetarian?: boolean | null
          is_rawfoodist?: boolean | null
          is_vegan?: boolean | null
          is_vegetalien?: boolean | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'user_avatar_fkey'
            columns: ['avatar']
            isOneToOne: false
            referencedRelation: 'avatar'
            referencedColumns: ['avatar_id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, 'public'>]

export type Tables<
  PublicTableNameOrOptions extends
  | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
    Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
      ? R
      : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
    PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
      PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
        ? R
        : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
  | keyof PublicSchema['Tables']
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
    Insert: infer I
  }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
  | keyof PublicSchema['Tables']
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
    Update: infer U
  }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U
    }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
  | keyof PublicSchema['Enums']
  | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
  | keyof PublicSchema['CompositeTypes']
  | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
    ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never
