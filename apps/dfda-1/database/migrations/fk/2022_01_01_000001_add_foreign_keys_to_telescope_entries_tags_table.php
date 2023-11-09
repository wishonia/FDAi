<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToTelescopeEntriesTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('telescope_entries_tags', function (Blueprint $table) {
            $table->foreign(['entry_uuid'])->references(['uuid'])->on('telescope_entries')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('telescope_entries_tags', function (Blueprint $table) {
            $table->dropForeign('telescope_entries_tags_entry_uuid_foreign');
        });
    }
}