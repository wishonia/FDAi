<?php
/*
*  GNU General Public License v3.0
*  Contributors: ADD YOUR NAME HERE, Mike P. Sinn
 */

namespace App\Override;
class QMFileBag extends  \Symfony\Component\HttpFoundation\FileBag
{
    /**
     * @param array $array
     * @return static
     */
    public static function __set_state(array $array) : self
    {
        $object = new self;
        foreach ($array as $key => $value) {
            $object->{$key} = $value;
        }
        return $object;
    }
}
