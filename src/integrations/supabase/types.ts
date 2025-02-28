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
      application_images: {
        Row: {
          application_id: string
          created_at: string | null
          id: string
          image_url: string
        }
        Insert: {
          application_id: string
          created_at?: string | null
          id?: string
          image_url: string
        }
        Update: {
          application_id?: string
          created_at?: string | null
          id?: string
          image_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "application_images_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
        ]
      }
      applications: {
        Row: {
          birth_date: string
          cep: string
          city: string
          complement: string | null
          cpf: string
          created_at: string | null
          criteria_a: string | null
          criteria_b: string | null
          criteria_c: string | null
          criteria_d: string | null
          criteria_e: string | null
          criteria_f: string | null
          cultural_category: string
          culture_history: string
          culture_maker_name: string
          divergences: string | null
          diversity_value: string
          email: string
          id: string
          illiterate_video: string | null
          item_2514: string | null
          name: string
          neighborhood: string
          number: string
          phone: string
          race: string
          state: string
          status: string | null
          street: string
          traditional_knowledge: string
          video: string
        }
        Insert: {
          birth_date: string
          cep: string
          city: string
          complement?: string | null
          cpf: string
          created_at?: string | null
          criteria_a?: string | null
          criteria_b?: string | null
          criteria_c?: string | null
          criteria_d?: string | null
          criteria_e?: string | null
          criteria_f?: string | null
          cultural_category: string
          culture_history: string
          culture_maker_name: string
          divergences?: string | null
          diversity_value: string
          email: string
          id?: string
          illiterate_video?: string | null
          item_2514?: string | null
          name: string
          neighborhood: string
          number: string
          phone: string
          race: string
          state: string
          status?: string | null
          street: string
          traditional_knowledge: string
          video: string
        }
        Update: {
          birth_date?: string
          cep?: string
          city?: string
          complement?: string | null
          cpf?: string
          created_at?: string | null
          criteria_a?: string | null
          criteria_b?: string | null
          criteria_c?: string | null
          criteria_d?: string | null
          criteria_e?: string | null
          criteria_f?: string | null
          cultural_category?: string
          culture_history?: string
          culture_maker_name?: string
          divergences?: string | null
          diversity_value?: string
          email?: string
          id?: string
          illiterate_video?: string | null
          item_2514?: string | null
          name?: string
          neighborhood?: string
          number?: string
          phone?: string
          race?: string
          state?: string
          status?: string | null
          street?: string
          traditional_knowledge?: string
          video?: string
        }
        Relationships: []
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
