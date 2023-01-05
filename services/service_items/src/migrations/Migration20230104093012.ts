import { Migration } from '@mikro-orm/migrations';

export class Migration20230104093012 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "basket" ("id" uuid not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "code" varchar(255) null, "user_id" varchar(255) not null, constraint "basket_pkey" primary key ("id"));');
    this.addSql('alter table "basket" add constraint "basket_code_unique" unique ("code");');
    this.addSql('alter table "basket" add constraint "basket_user_id_unique" unique ("user_id");');

    this.addSql('create table "basket_item" ("id" uuid not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "basket_id_id" uuid not null, "price" int not null, "sale_price" int not null, "description" varchar(255) not null, "attributes" jsonb not null, constraint "basket_item_pkey" primary key ("id"));');

    this.addSql('alter table "basket_item" add constraint "basket_item_basket_id_id_foreign" foreign key ("basket_id_id") references "basket" ("id") on update cascade;');
  }

}
